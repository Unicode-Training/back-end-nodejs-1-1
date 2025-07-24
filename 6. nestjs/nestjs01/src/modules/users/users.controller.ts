import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  // NotFoundException,
  Param,
  Patch,
  Post,
  Put,
  Req,
  //   Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly userService: UsersService,
    private readonly authService: AuthService,
  ) {}
  @Get()
  index(
    @Headers() headers: { 'x-api-key': string },
    @Req() req: Request,
    // @Res() res: Response,
  ) {
    // const apiKey = headers['x-api-key'];
    // console.log(apiKey);
    console.log(req.method);
    // res.set('x-api-key', '123456');
    // throw new NotFoundException('User not found');
    return this.userService.findAll();
    // return res.send('User Index');
  }

  @Post('/login')
  login() {
    return this.authService.login();
  }

  @Get('/something')
  something() {
    return this.userService.something();
  }

  @Get('/:id')
  show(@Param('id') id: number) {
    return 'User Show: ' + id;
  }

  @Post()
  create(@Body() body: any): any {
    return body;
  }

  @Put('/:id')
  updatePut(@Param('id') id: number) {
    return 'User Update Put: ' + id;
  }

  @Patch('/:id')
  updatePatch(@Param('id') id: number) {
    return 'User Update Patch: ' + id;
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return 'User Delete: ' + id;
  }
}
