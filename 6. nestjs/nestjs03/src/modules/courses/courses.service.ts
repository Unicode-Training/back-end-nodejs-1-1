import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from 'src/entites/course.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly coursesRepository: Repository<Course>,
  ) {}

  findAll() {
    return this.coursesRepository.find();
  }

  findOne(id: number) {
    return this.coursesRepository.findOne({
      where: { id },
    });
  }

  create(body: any) {
    return this.coursesRepository.save(body);
  }

  async update(body: any, id: number) {
    await this.coursesRepository.update(id, body);
    return this.findOne(id);
  }

  async delete(id: number) {
    const course = await this.findOne(id);
    await this.coursesRepository.save({
      ...course,
      users: [],
    });
    await this.coursesRepository.delete(id);
    return course;
  }
}
