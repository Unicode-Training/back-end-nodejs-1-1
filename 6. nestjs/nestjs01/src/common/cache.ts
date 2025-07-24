import { Injectable } from '@nestjs/common';

@Injectable()
export class Cache {
  create() {
    return 'create';
  }
}
