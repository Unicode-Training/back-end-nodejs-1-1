import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { ProductsModule } from './modules/products/products.module';
import { PostsModule } from './modules/posts/posts.module';
import { AuthMiddleware } from './common/middlewares/auth/auth.middleware';
import { LoggerMiddleware } from './common/middlewares/logger/logger.middleware';

@Module({
  imports: [UsersModule, ProductsModule, PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(AuthMiddleware).forRoutes('*');
    consumer.apply(LoggerMiddleware).forRoutes('*');
    consumer.apply(AuthMiddleware).forRoutes('*');
    // consumer.apply(AuthMiddleware).forRoutes({
    //   path: 'users/*',
    //   method: RequestMethod.GET,
    // });
  }
}
