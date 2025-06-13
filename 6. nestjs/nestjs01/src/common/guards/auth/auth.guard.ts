import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { constants } from 'src/constants/constants';
import { RequestWithUser } from 'src/types/request';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('AuthGuard');

    const request: RequestWithUser = context.switchToHttp().getRequest();
    //Kiểm tra x-api-key có trùng khớp với secret trong contants không?
    // - Nếu có --> Lấy thông tin admin và gán vào request
    // - Nếu không --> Trả về thông báo lỗi
    const apiKey = request.headers['x-api-key'];
    const secret = constants.secret;
    if (apiKey !== secret) {
      throw new UnauthorizedException();
    }
    request.user = constants.admin;
    return true;
  }
}

//Pipe
//Class Validator
//transform
//DTO = Data Transfer Object
