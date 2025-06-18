import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { UsersService } from './users.service';
import CreateUserDto from './dto/create-user.dto';
import { UsersTransformerInterceptor } from 'src/common/interceptors/users-transformer/users-transformer.interceptor';

@Controller('users')
@UseInterceptors(UsersTransformerInterceptor)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return {
      data: [
        {
          id: 1,
          full_name: 'User 1',
          email: 'user1@gmail.com',
          created_at: '2020-01-01 00:00:00',
          updated_at: '2020-01-01 00:00:00',
        },
        {
          id: 1,
          full_name: 'User 2',
          email: 'user2@gmail.com',
          created_at: '2020-01-01 00:00:00',
          updated_at: '2020-01-01 00:00:00',
        },
      ],
    };
  }
  @Get('/:id')
  findOne() {
    return {
      data: {
        id: 1,
        full_name: 'User 1',
        email: 'user1@gmail.com',
        created_at: '2020-01-01 00:00:00',
        updated_at: '2020-01-01 00:00:00',
      },
    };
  }
  @Post()
  // @UsePipes(new ValidationPipe())
  create(@Body() body: CreateUserDto) {
    //
    return body;
  }
}
