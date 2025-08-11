import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Req,
  Request,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from 'src/guards/auth/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async login(@Body() body: any) {
    const attempt = await this.authService.login(body);
    if (!attempt) {
      throw new UnauthorizedException('Email hoặc mật khẩu không chính xác');
    }
    return attempt;
  }

  @Post('/register')
  register(@Body() body: any) {
    return this.authService.register(body);
  }

  @UseGuards(AuthGuard)
  @Get('/profile')
  profile(@Request() req: any) {
    return req.user;
  }

  @UseGuards(AuthGuard)
  @Patch('/profile')
  async updateProfile(@Request() req: any, @Body() body: any) {
    const data = await this.authService.updateProfile(req.user, body);
    if (!data) {
      return {
        success: false,
        message: 'Email is exists',
      };
    }
    return {
      success: true,
      data,
    };
  }

  @Post('/refresh-token')
  async refreshToken(@Body() body: any) {
    const result = await this.authService.refreshToken(body);
    if (!result) {
      throw new UnauthorizedException("Refresh token isn't valid");
    }
    return result;
  }

  @Post('/logout')
  @UseGuards(AuthGuard)
  logout(@Request() req: any) {
    const { user } = req;
    const jti = user.jti;
    const exp = user.exp;
    return this.authService.logout(jti, exp);
  }
}
