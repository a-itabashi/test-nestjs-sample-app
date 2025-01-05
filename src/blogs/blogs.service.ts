import { Injectable } from '@nestjs/common';

@Injectable()
export class BlogsService {
  create() {
    return 'success create blog!!';
  }
}
