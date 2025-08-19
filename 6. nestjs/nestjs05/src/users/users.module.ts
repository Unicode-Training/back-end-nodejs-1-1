import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import Mail from 'src/utils/mail';
import { BullModule } from '@nestjs/bullmq';

@Module({
  controllers: [UsersController],
  providers: [UsersService, Mail],
  imports: [
    BullModule.registerQueue({
      name: 'email',
    }),
  ],
})
export class UsersModule {}
