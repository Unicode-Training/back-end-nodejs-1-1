import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';
import { SomethingService } from './something.service';
import { Cache } from 'src/common/cache';

@Module({
  controllers: [UsersController],
  providers: [UsersService, AuthService, SomethingService, Cache],
  exports: [UsersService],
})
export class UsersModule {}
