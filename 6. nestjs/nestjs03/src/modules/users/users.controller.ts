import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import CreateUserDto from './dto/create-user.dto';
import UpdateUserDto from './dto/update-user.dto';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { validationException } from 'src/common/exceptions/validation';
export type QueryParams = {
  select: string;
  order: string;
  sort: string;
  limit: number;
  page: number;
  status: string;
  name: string;
  includes: string;
};
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  async findAll(@Query() query: QueryParams) {
    const [data, total] = await this.usersService.findAll(query);
    return {
      data,
      total,
    };
  }

  @Get(':id')
  async find(@Param('id') id: number, @Query() query: QueryParams) {
    const data = await this.usersService.findOne(id, query);
    if (!data) {
      throw new NotFoundException('User not found');
    }
    return data;
  }

  @Post()
  create(@Body() body: CreateUserDto) {
    return this.usersService.create(body);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() body: any) {
    const bodyUpdate = plainToInstance(UpdateUserDto, { id, ...body });
    const errors = await validate(bodyUpdate);
    if (errors.length) {
      throw validationException(errors);
    }

    const data = await this.usersService.update(id, body);
    if (!data) {
      throw new NotFoundException('User not found');
    }
    return data;
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    const data = await this.usersService.delete(id);
    if (!data) {
      throw new NotFoundException('User not found');
    }
    return data;
  }

  @Post(':userId/posts')
  async createPost(@Body() body: any, @Param('userId') userId: number) {
    const user = await this.usersService.find(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return this.usersService.createPost(body, user);
  }

  @Patch('posts/:postId')
  async updatePost(@Body() body: any, @Param('postId') postId: number) {
    const post = await this.usersService.updatePost(body, postId);
    if (!post) {
      throw new NotFoundException('Post not found');
    }
    return post;
  }
}
