import { Injectable } from '@nestjs/common';
import { SomethingService } from './something.service';
import { Cache } from 'src/common/cache';

@Injectable()
export class UsersService {
  constructor(
    private readonly somethingService: SomethingService,
    private readonly cache: Cache,
  ) {}
  findAll() {
    return 'Find All';
  }

  something() {
    console.log(this.cache.create());
    return this.somethingService.doSomething();
  }

  findOne() {
    return 'User detail';
  }
}
