import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entites/user.entity';
import Hash from 'src/utils/hashing';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private jwtService: JwtService,
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
    const token = this.jwtService.sign({
      userId: user.id,
      email: user.email,
    });

    const refreshToken = this.jwtService.sign(
      {
        userId: user.id,
        email: user.email,
      },
      {
        expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRED,
        secret: process.env.JWT_REFRESH_TOKEN_SECRET,
      },
    );
    return {
      accessToken: token,
      refreshToken,
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

  refreshToken(body: any) {
    const refreshToken = body.refreshToken;
    try {
      const decoded = this.jwtService.verify(refreshToken, {
        secret: process.env.JWT_REFRESH_TOKEN_SECRET,
      });
      const token = this.jwtService.sign({
        userId: decoded.userId,
        email: decoded.email,
      });
      return {
        accessToken: token,
        refreshToken,
      };
    } catch {
      return false;
    }
  }
}
