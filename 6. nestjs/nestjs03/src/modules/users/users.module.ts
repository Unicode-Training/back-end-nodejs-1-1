import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entites/user.entity';
import { Unique } from 'src/validation/unique-constraint';
import { Phone } from 'src/entites/phone.entity';
import { Post } from 'src/entites/posts.entity';
import { UserCourseController } from './user-course.controller';
import { Course } from 'src/entites/course.entity';

@Module({
  controllers: [UsersController, UserCourseController],
  providers: [Unique, UsersService],
  imports: [TypeOrmModule.forFeature([User, Phone, Post, Course])],
})
export class UsersModule {}
