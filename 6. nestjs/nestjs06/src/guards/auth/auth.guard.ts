/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { InjectRedis } from '@nestjs-modules/ioredis';
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import Redis from 'ioredis';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    @InjectRedis() private readonly redis: Redis,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ').slice(-1).join();
    const decoded = this.authService.verifyToken(token);
    if (!decoded) {
      throw new UnauthorizedException('Unauthorized');
    }
    const jti = decoded.jti;

    //Check blacklist
    const blacklist = await this.redis.get(`jwt_blacklist_${jti}`);

    if (blacklist) {
      throw new UnauthorizedException('Unauthorized');
    }
    const user = await this.authService.profile(decoded.userId);
    request.user = user;
    request.user.jti = jti;
    request.user.exp = decoded.exp;
    return true;
  }
}
