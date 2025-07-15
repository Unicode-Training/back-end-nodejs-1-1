import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.coursesService.findOne(id);
  }

  @Post()
  create(@Body() body: any) {
    return this.coursesService.create(body);
  }

  @Patch(':id')
  update(@Body() body: any, @Param('id') id: number) {
    return this.coursesService.update(body, id);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.coursesService.delete(id);
  }
}
