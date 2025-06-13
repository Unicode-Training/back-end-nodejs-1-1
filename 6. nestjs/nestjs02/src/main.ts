import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  HttpException,
  HttpStatus,
  ValidationError,
  ValidationPipe,
} from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: false,
      exceptionFactory: (errors: ValidationError[]) => {
        const messages: any[] = errors.map((error: ValidationError) => {
          console.log(error);
          if (error.constraints) {
            const values = Object.values(error.constraints);
            return [error.property, values.length > 1 ? values : values[0]];
          }
        });
        // return new BadRequestException([Object.fromEntries(messages)]);
        return new HttpException(
          {
            error: Object.fromEntries(messages),
            message: 'Validation failed',
          },
          HttpStatus.BAD_REQUEST,
        );
      },
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
