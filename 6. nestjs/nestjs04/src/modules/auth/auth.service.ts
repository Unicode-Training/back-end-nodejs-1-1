import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entites/user.entity';
import Hash from 'src/utils/hashing';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import Redis from 'ioredis';
import { InjectRedis } from '@nestjs-modules/ioredis';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private jwtService: JwtService,
    @InjectRedis() private readonly redis: Redis,
  ) {}

  register(body: any) {
    body.password = Hash.make(body.password);
    return this.userRepository.save(body);
  }

  async login(body: any) {
    //Kiểm tra email có tồn tại trong database không?
    const user = await this.userRepository.findOne({
      where: {
        email: body.email,
      },
    });
    if (!user) {
      return false;
    }
    //So sánh password từ body và hash password trong database
    if (!Hash.compare(body.password, user.password)) {
      return false;
    }
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
}
