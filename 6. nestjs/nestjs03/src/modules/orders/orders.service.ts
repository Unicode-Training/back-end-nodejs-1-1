import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from 'src/entites/course.entity';
import { OrderDetail } from 'src/entites/order-detail.entity';
import { Order } from 'src/entites/order.entity';
import { User } from 'src/entites/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order) private orderRepository: Repository<Order>,
    @InjectRepository(Course) private courseRepository: Repository<Course>,
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(OrderDetail)
    private orderDetailRepository: Repository<OrderDetail>,
    private eventEmitter: EventEmitter2,
  ) {}

  async create(userId: number, courses: number[], status: string) {
    if (!userId || !Array.isArray(courses)) {
      return;
    }
    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: {
        courses: true,
      },
    });
    if (!user) {
      return;
    }
    const courseData = await Promise.all(
      courses.map((courseId: number) =>
        this.courseRepository.findOne({ where: { id: courseId } }),
      ),
    );
    const total = courseData.reduce((total, course) => {
      if (course) {
        return total + course.price;
      }
    }, 0);
    const order = await this.orderRepository.save({
      user,
      total,
      status,
    });
    if (!order) {
      return;
    }
    const orderDetails = await Promise.all(
      courseData.map((course) => {
        if (course) {
          return this.orderDetailRepository.save({
            order,
            course,
            price: course.price,
          });
        }
      }),
    );

    if (!orderDetails) {
      return;
    }
    if (status === 'completed') {
      this.eventEmitter.emit('order.completed', userId, courses);
    }
    return order;
    // if (status === 'completed') {
    //   if (courseData.length) {
    //     const dataUpdate = {
    //       ...user,
    //       courses: [...user.courses, ...courseData] as Course[],
    //     };

    //     await this.userRepository.save(dataUpdate);
    //     return order;
    //   }
    // }
  }
}
