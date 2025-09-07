import { Controller, Post, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { PermissionGuard } from 'src/guards/permission/permission.guard';

@Controller('products')
@UseGuards(AuthGuard)
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @UseGuards(PermissionGuard('products.create'))
  create() {
    return 'Create';
  }
}
