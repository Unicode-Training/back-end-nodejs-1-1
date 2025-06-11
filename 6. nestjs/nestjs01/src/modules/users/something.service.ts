import { Injectable } from '@nestjs/common';

@Injectable()
export class SomethingService {
  doSomething() {
    return 'Something';
  }
}
