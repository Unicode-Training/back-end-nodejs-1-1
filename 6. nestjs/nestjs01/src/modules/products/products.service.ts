import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { PostsService } from '../posts/posts.service';

@Injectable()
export class ProductsService {
  constructor(
    private readonly usersService: UsersService,
    @Inject(forwardRef(() => PostsService))
    private readonly postsService: PostsService,
  ) {}
  findAll() {
    // return 'This action returns all products';
    console.log(this.postsService.findAll());

    return this.usersService.findOne();
  }

  getProduct() {
    return 'get product';
  }
}
