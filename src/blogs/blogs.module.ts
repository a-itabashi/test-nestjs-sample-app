// import { Module } from '@nestjs/common';

// @Module({})
// export class BlogsModule {}

import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { BlogsController } from './blogs.controller';
import { BlogsService } from './blogs.service';

@Module({
  imports: [TypeOrmModule.forFeature()],
  providers: [BlogsService],
  controllers: [BlogsController],
})
export class BlogsModule {}
