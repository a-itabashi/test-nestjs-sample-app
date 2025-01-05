import { Injectable } from '@nestjs/common';
import { BlogsRepository } from './blogs.repository';
import { Blog } from '../entities/blog.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BlogStatus } from './blog-status.enum';
import { CreateBlogDto } from './create-blog.dto';

// Repositoryを使わない方法
// @Injectable()
// export class BlogsService {
//   constructor(
//     @InjectRepository(Blog)
//     private readonly blogsRepository: Repository<Blog>, // TypeORM リポジトリを注入
//   ) {}

//   async create(): Promise<Blog> {
//     const blog = this.blogsRepository.create({
//       title: 'test-title',
//       content: 'test-content',
//       status: BlogStatus.PUBLISHED,
//     });

//     return await this.blogsRepository.save(blog); // 作成したブログを保存
//   }
// }

@Injectable()
export class BlogsService {
  constructor(private readonly blogsRepository: BlogsRepository) {}

  create(createBlogDto: CreateBlogDto) {
    return this.blogsRepository.createBlog(createBlogDto); // カスタムメソッドを利用
  }
}
