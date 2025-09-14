import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Get()
  findAll() {
    return this.rolesService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.rolesService.findOne(id);
  }
  @Post()
  create(@Body() body: any) {
    return this.rolesService.create(body);
  }

  @Patch('/:id')
  update(@Body() body: any, @Param('id') id: number) {
    return this.rolesService.update(id, body);
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.rolesService.delete(id);
  }

  @Put(':id/permissions')
  updatePermissions(@Body() body: any, @Param('id') id: number) {
    return this.rolesService.updatePermissions(id, body);
  }
}
