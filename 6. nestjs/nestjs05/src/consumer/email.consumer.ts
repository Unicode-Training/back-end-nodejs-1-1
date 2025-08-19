import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import Mail from 'src/utils/mail';

@Processor('email') //Thay tên queue
export class EmailConsumer extends WorkerHost {
  constructor(private readonly mail: Mail) {
    super();
  }
  async process(job: Job<any, any, string>): Promise<any> {
    const { to, subject, content } = job.data as {
      to: string;
      subject: string;
      content: string;
    };
    try {
      await this.mail.sendRaw(to, subject, content);
      console.log(`Bắt đầu gửi email: ${to}`);
      return {}; //Tự động xóa job
    } catch {
      console.log(`Gửi email bị lỗi: ${to}`);
      throw new Error('Gửi email bị lỗi');
    }
  }
}
