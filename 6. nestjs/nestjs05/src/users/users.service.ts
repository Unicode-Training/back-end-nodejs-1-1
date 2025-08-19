import { Injectable } from '@nestjs/common';
import Mail from 'src/utils/mail';
import { Queue } from 'bullmq';
import { InjectQueue } from '@nestjs/bullmq';

@Injectable()
export class UsersService {
  constructor(
    private readonly mail: Mail,
    @InjectQueue('email') private emailQueue: Queue,
  ) {}
  sendMail() {
    return this.mail.send<{ name: string }>(
      'hoangan.web@gmail.com',
      'Test đọc mail',
      'welcome',
      {
        name: 'Hoàng An',
      },
    );
    // return this.mail.sendRaw(
    //   'hoangan.web@gmail.com',
    //   'Ok rồi',
    //   '<h3>hello</h3>',
    // );
  }

  async register() {
    const job = await this.emailQueue.add(
      'send-mail',
      {
        to: 'hoangan.web@gmail.com',
        subject: 'Email gửi từ queue',
        content: 'Nội dung gửi mẫu',
      },
      {
        delay: 5000,
        attempts: 3,
        backoff: 5000,
        // removeOnFail: true,
      },
    );
    return job;
  }
}
