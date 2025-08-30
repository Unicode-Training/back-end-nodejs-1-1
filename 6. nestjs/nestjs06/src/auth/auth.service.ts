/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { InjectRedis } from '@nestjs-modules/ioredis';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import Redis from 'ioredis';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
type GoogleParams = {
  client_id: string;
  redirect_uri: string;
  response_type: string;
  scope: string;
  access_type: string;
};
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private jwtService: JwtService,
    @InjectRedis() private readonly redis: Redis,
  ) {}
  googleRedirectUrl() {
    const params: GoogleParams = {
      client_id: process.env.GOOGLE_CLIENT_ID as string,
      redirect_uri: process.env.GOOGLE_CALLBACK_URL as string,
      response_type: 'code',
      scope: 'email profile',
      access_type: 'offline',
    };

    const oAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?${new URLSearchParams(params).toString()}`;
    return oAuthUrl;
  }

  async googleCallback(code: string): Promise<any> {
    const url = `https://oauth2.googleapis.com/token`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        code,
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_SECRET_ID,
        redirect_uri: process.env.GOOGLE_CALLBACK_URL,
        grant_type: `authorization_code`,
      }),
    });
    if (!response.ok) {
      return;
    }
    return response.json();
    // if (tokenData) {
    //   const accessToken = (tokenData as { access_token: string }).access_token;
    //   //Gọi api lấy user
    //   const userUrl = `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`;
    //   const userResponse = await fetch(userUrl);
    //   const userData: unknown = await userResponse.json();
    //   return userData;
    // }
  }

  async googleLogin(accessToken: string) {
    const response = await fetch(
      `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`,
    );
    const profileFromGoogle: unknown = await response.json();
    const { email, name } = profileFromGoogle as {
      email: string;
      name: string;
    };
    let user = await this.userRepository.findOne({
      where: {
        email,
      },
    });
    if (!user) {
      user = await this.userRepository.save({
        name,
        email,
      });
    }
    return this.createToken(user);
  }

  profile(id: number) {
    return this.userRepository.findOne({
      where: { id },
    });
  }

  verifyToken = (token: string) => {
    try {
      const decoded = this.jwtService.verify(token);
      return decoded;
    } catch {
      return false;
    }
  };

  verifyRefreshToken = (token: string) => {
    try {
      const decoded = this.jwtService.verify(token, {
        secret: process.env.JWT_REFRESH_TOKEN_SECRET,
      });
      return decoded;
    } catch {
      return false;
    }
  };

  async refreshToken(body: any) {
    const refreshToken = body.refreshToken;
    try {
      const decoded = this.jwtService.verify(refreshToken, {
        secret: process.env.JWT_REFRESH_TOKEN_SECRET,
      });
      const token = this.jwtService.sign({
        userId: decoded.userId,
        email: decoded.email,
      });
      //Thêm token cũ vào blacklist
      // => Lấy được jti của access token cũ
      // B1: Lấy jti của refresh token
      const jtiRefreshToken = decoded.jti;
      // B2: Gọi lên redis --> jti của access token
      const accessToken = await this.redis.get(
        `jwt_refresh_${jtiRefreshToken}`,
      );
      // B3: Thêm jti access token vào blacklist
      if (accessToken) {
        //Kiểm tra xem thời gian sống của access có > thời gian hiện tại không?
        const now = Date.now() / 1000;
        const { exp, jtiAccessToken } = JSON.parse(accessToken);
        if (now < exp) {
          await this.redis.set(
            `jwt_blacklist_${jtiAccessToken}`,
            jtiAccessToken,
            'EX',
            Math.round(exp - now),
          );
        }
      } else {
        return false;
      }
      return {
        accessToken: token,
        refreshToken,
      };
    } catch {
      return false;
    }
  }

  async logout(jti: string, exp: number) {
    const diff = exp - Date.now() / 1000;
    await this.redis.set(`jwt_blacklist_${jti}`, jti, 'EX', Math.round(diff));
    return {
      success: true,
    };
  }

  async createToken(user: any) {
    //Tạo jwt token
    // - Xác định thời gian (.env)
    // - Xác định data đưa vào jwt
    const jtiAccessToken = uuid();
    const token = this.jwtService.sign({
      jti: jtiAccessToken, //jwt id
      userId: user.id,
      email: user.email,
    });

    const jtiRefreshToken = uuid();
    const refreshToken = this.jwtService.sign(
      {
        jti: jtiRefreshToken,
        userId: user.id,
        email: user.email,
      },
      {
        expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRED,
        secret: process.env.JWT_REFRESH_TOKEN_SECRET,
      },
    );
    //Thêm jti vào redis
    //jtiRefreshToken: jtiAccessToken
    //- decoded Access Token để lấy ra exp
    const { exp: expAccessToken } = this.verifyToken(token);
    //- decoded Refresh Token để lấy ra exp
    const { exp: expRefreshToken } = this.verifyRefreshToken(refreshToken);

    await this.redis.set(
      `jwt_refresh_${jtiRefreshToken}`,
      JSON.stringify({
        jtiAccessToken,
        exp: expAccessToken,
      }),
      'EX',
      Math.round(expRefreshToken - Date.now() / 1000),
    );
    return {
      accessToken: token,
      refreshToken,
      user,
    };
  }
}
