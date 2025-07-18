import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from 'src/entites/order.entity';
import { Course } from 'src/entites/course.entity';
import { User } from 'src/entites/user.entity';
import { OrderDetail } from 'src/entites/order-detail.entity';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
  imports: [TypeOrmModule.forFeature([Order, Course, User, OrderDetail])],
})
export class OrdersModule {}
