/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Request,
  Res,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import type { Response } from 'express';
import { AuthGuard } from 'src/guards/auth/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('google/redirect')
  google(@Res() res: Response) {
    const url = this.authService.googleRedirectUrl();
    return res.redirect(url);
  }

  @Get('google/callback')
  async googleCallback(@Query() query: { code: string }, @Res() res: Response) {
    const code = query.code;
    const tokenData: unknown = await this.authService.googleCallback(code);
    if (!tokenData) {
      throw new UnauthorizedException("Can't get token");
    }
    const accessToken = (tokenData as { access_token: string }).access_token;

    return res.redirect(
      process.env.GOOGLE_FRONTEND_URL + `?accessToken=${accessToken}`,
    );
  }

  @Post('google/callback')
  async googleCallbackPost(@Body() { accessToken }: { accessToken: string }) {
    return this.authService.googleLogin(accessToken);
  }

  @UseGuards(AuthGuard)
  @Get('/profile')
  profile(@Request() req: any) {
    return req.user;
  }
}
