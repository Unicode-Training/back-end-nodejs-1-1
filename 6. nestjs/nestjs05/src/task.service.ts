import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class TasksService {
  @Cron('*/5 * * * * *')
  handleCron() {
    console.log('Cron job vừa chạy rồi');
  }

  @Cron('*/30 * * * * *')
  handleCron2() {
    console.log('Cron job vừa chạy rồi 2');
  }
}
