import { Controller, Get, Post, Query, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('send-mail')
  sendMail() {
    return this.usersService.sendMail();
  }

  @Get('/tracking')
  tracking(@Query() query: { id: number }) {
    const id = query.id;
    console.log(`Vừa mở mail: `, id);
  }

  @Get('/click')
  clickLink(@Query() query: { url: string }, @Res() res: Response) {
    const url = query.url;
    console.log(`Vừa mở link: `, url);
    return res.redirect(url);
  }

  @Post('/register')
  register() {
    return this.usersService.register();
  }
}
