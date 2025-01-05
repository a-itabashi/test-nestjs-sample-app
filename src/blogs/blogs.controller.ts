import { Body, Controller, Post } from '@nestjs/common';
import { BlogsService } from './blogs.service';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Post()
  create(@Body() createBlogDto: { title: string; content: string }) {
    return this.blogsService.create(createBlogDto);
  }
}
