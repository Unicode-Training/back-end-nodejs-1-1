import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { AuthGuard } from 'src/common/guards/auth/auth.guard';
import { Request } from 'express';
import { PermissionGuard } from 'src/common/guards/permission/permission.guard';
// import { RequestWithUser } from 'src/types/request';
@UseGuards(AuthGuard, PermissionGuard)
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll() {
    // console.log(request.user);
    // console.log(request.user.email);

    return this.productsService.findAll();
  }

  @Post()
  create() {
    return 'create';
  }
}
