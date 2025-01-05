// import { Module } from '@nestjs/common';

// @Module({})
// export class BlogsModule {}

import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature()],
  providers: [],
  controllers: [],
})
export class BlogsModule {}
