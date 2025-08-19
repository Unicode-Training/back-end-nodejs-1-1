import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';
import { BullModule } from '@nestjs/bullmq';
import { EmailConsumer } from './consumer/email.consumer';
import Mail from './utils/mail';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksService } from './task.service';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MailerModule.forRoot({
      transport: `smtps://${process.env.MAIL_USERNAME}:${process.env.MAIL_PASSWORD}@${process.env.MAIL_HOST}`,
      defaults: {
        from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM}>`,
      },
      template: {
        dir: __dirname + '/mail/templates',
        adapter: new EjsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
    BullModule.forRoot({
      connection: {
        host: 'localhost',
        port: 6379,
      },
    }),
    UsersModule,
    ScheduleModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService, EmailConsumer, Mail, TasksService],
})
export class AppModule {}
