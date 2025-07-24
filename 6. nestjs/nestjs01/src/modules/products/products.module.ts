import { forwardRef, Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { UsersModule } from '../users/users.module';
import { PostsModule } from '../posts/posts.module';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [UsersModule, forwardRef(() => PostsModule)],
  exports: [ProductsService],
})
export class ProductsModule {}
