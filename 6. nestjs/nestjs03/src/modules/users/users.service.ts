import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entites/user.entity';
import Hash from 'src/utils/hashing';
import {
  FindManyOptions,
  FindOneOptions,
  FindOptionsSelect,
  FindOptionsWhere,
  Like,
  Repository,
} from 'typeorm';
import { QueryParams } from './users.controller';
import { APP_CONFIG } from 'src/configs/app';
import { Phone } from 'src/entites/phone.entity';
import { Post } from 'src/entites/posts.entity';
import { Course } from 'src/entites/course.entity';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(Phone) private phoneRepository: Repository<Phone>,
    @InjectRepository(Post) private postRepository: Repository<Post>,
    @InjectRepository(Course) private courseRepository: Repository<Course>,
  ) {}

  findAll({
    select,
    order = 'asc',
    sort = 'id',
    limit = APP_CONFIG.LIMIT_PER_PAGE,
    page = 1,
    status,
    name,
    includes = '',
  }: QueryParams) {
    //Yêu cầu: Nếu không có select --> Lấy tất cả các cột
    //Nếu có: Trả về theo select đã chọn
    // const selectArr: FindOptionsSelect<User> = {
    //   id: true,
    //   name: true,
    // };
    const selectArr = select ? select.split(',').filter((item) => item) : [];
    const selectObj: FindOptionsSelect<User> = selectArr.reduce(
      (result, item) => ({
        ...result,
        [item.trim()]: true,
      }),
      {},
    );
    const skip = (page - 1) * limit;
    if (status && !['active', 'inactive'].includes(status)) {
      return [];
    }
    const where: FindOptionsWhere<User> = {};
    if (status) {
      where.status = status === 'active' ? true : false;
    }
    if (name) {
      where.name = Like(`%${name}%`);
    }
    const relations = includes
      .split(',')
      .filter((item) => item)
      .reduce(
        (result, item) => ({
          ...result,
          [item.trim()]: true,
        }),
        {},
      );

    return this.usersRepository.findAndCount({
      select: { ...selectObj, password: false },
      order: {
        [sort]: order,
      },
      take: limit,
      skip,
      where,
      relations,
    });
  }
  find(id: number, relations: any = {}) {
    return this.usersRepository.findOne({
      where: {
        id,
      },
      relations,
    });
  }
  async findOne(id: number, { includes = '' }: QueryParams) {
    const relations = includes
      .split(',')
      .filter((item) => item)
      .reduce(
        (result, item) => ({
          ...result,
          [item.trim()]: true,
        }),
        {},
      );
    return this.usersRepository.findOne({
      where: {
        id,
      },
      relations,
    });
  }
  async create(data: any) {
    data.password = Hash.make(data.password);
    const user = await this.usersRepository.save(data);
    if (user) {
      //Thêm user thành công
      const phone = await this.phoneRepository.save({
        phone: data.phone,
        user,
      });
      return {
        ...user,
        phone,
      };
    }
  }

  async update(id: number, data: any) {
    if (!data) {
      return false;
    }
    const dataUpdate = {
      ...data,
    };
    delete dataUpdate.phone;
    const update = await this.usersRepository.update(id, dataUpdate);
    if (update.affected) {
      const user = await this.find(id);
      if (user) {
        const phone = { ...user.phone };
        phone.phone = data.phone;

        await this.phoneRepository.save({
          ...phone,
          user,
        });
        return {
          ...user,
          phone,
        };
      }
    }
    return false;
  }

  async delete(id: number) {
    const user = await this.find(id, {
      posts: true,
      phone: true,
    });
    const posts = user?.posts;
    const phone = user?.phone;
    if (posts) {
      await this.postRepository.remove(posts);
    }
    if (phone) {
      await this.phoneRepository.remove(phone);
    }

    const deleted = await this.usersRepository.delete(id);
    if (deleted.affected) {
      return user;
    }
    return false;
  }

  async createPost(data: any, user: any) {
    if (Array.isArray(data)) {
      const posts = Promise.all(
        data.map((item) => this.postRepository.save({ ...item, user })),
      );
      return posts;
    }
    const post = await this.postRepository.save({
      ...data,
      user,
    });
    return post;
  }

  async updatePost(data: any, postId: number) {
    const post = await this.postRepository.findOne({
      where: {
        id: postId,
      },
    });
    if (!post) {
      return false;
    }
    const postUpdate = { ...post, ...data };
    if (data.user_id) {
      const user = await this.find(data.user_id);
      if (user) {
        postUpdate.user = user;
      }
    }

    return this.postRepository.save(postUpdate);
  }

  async syncCourses(userId: number, courses: number[]) {
    if (!userId || !Array.isArray(courses)) {
      return;
    }
    const user = await this.find(userId, {
      courses: true,
    });
    if (!user) {
      return;
    }

    const coursesData: (Course | null)[] = await Promise.all(
      courses.map((courseId: number) =>
        this.courseRepository.findOne({ where: { id: courseId } }),
      ),
    );
    if (coursesData.length) {
      const dataUpdate = {
        ...user,
        courses: coursesData as Course[],
      };

      return this.usersRepository.save(dataUpdate);
    }
  }

  @OnEvent('order.completed')
  async addCourses(userId: number, courses: number[]) {
    if (!userId || !Array.isArray(courses)) {
      return;
    }
    const user = await this.find(userId, {
      courses: true,
    });
    if (!user) {
      return;
    }

    const coursesData: (Course | null)[] = await Promise.all(
      courses.map((courseId: number) =>
        this.courseRepository.findOne({ where: { id: courseId } }),
      ),
    );
    if (coursesData.length) {
      const dataUpdate = {
        ...user,
        courses: [...user.courses, ...coursesData] as Course[],
      };

      await this.usersRepository.save(dataUpdate);
      return this.find(userId, {
        courses: true,
      });
    }
  }

  async removeCourses(userId: number) {
    if (!userId) {
      return;
    }
    const user = await this.find(userId, {
      courses: true,
    });
    if (!user) {
      return;
    }
    const dataUpdate = {
      ...user,
      courses: [],
    };

    return this.usersRepository.save(dataUpdate);
  }
}
