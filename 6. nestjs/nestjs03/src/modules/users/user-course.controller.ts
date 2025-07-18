import { Body, Controller, Delete, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('user-course')
export class UserCourseController {
  constructor(private readonly usersService: UsersService) {}

  @Put('sync')
  async syncCourses(@Body() body: any) {
    return this.usersService.syncCourses(body.user, body.courses);
  }

  @Post('add')
  async addCourses(@Body() body: any) {
    return this.usersService.addCourses(body.user, body.courses);
  }

  @Delete('remove')
  async removeCourses(@Body() body: any) {
    return this.usersService.removeCourses(body.user);
  }
}
