// import { Module } from '@nestjs/common';

// @Module({})
// export class BlogsModule {}

import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { BlogsController } from './blogs.controller';
import { BlogsService } from './blogs.service';
import { Blog } from '../entities/blog.entity';
import { BlogsRepository } from './blogs.repository';
import { DataSource } from 'typeorm';

@Module({
  // imports: [TypeOrmModule.forFeature()],
  imports: [TypeOrmModule.forFeature([Blog])],
  // providers: [BlogsService],
  providers: [
    BlogsService,
    {
      provide: BlogsRepository,
      useFactory: (dataSource: DataSource) => new BlogsRepository(dataSource),
      inject: [DataSource], // TypeORM の DataSource を注入
    },
  ],
  controllers: [BlogsController],
})
export class BlogsModule {}
