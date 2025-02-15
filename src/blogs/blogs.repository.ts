import { Blog } from '../entities/blog.entity';
// import { EntityRepository, Repository } from 'typeorm';
import { DataSource, Repository } from 'typeorm';
import { BlogStatus } from './blog-status.enum';
import { CreateBlogDto } from './create-blog.dto';

export class BlogsRepository extends Repository<Blog> {
  constructor(dataSource: DataSource) {
    super(Blog, dataSource.manager);
  }

  async createBlog(createBlogDto: CreateBlogDto): Promise<Blog> {
    const { title, content } = createBlogDto;

    const blog = this.create({
      title,
      content,
      status: BlogStatus.PUBLISHED,
      // createdAt: new Date().toISOString(),
      // updatedAt: new Date().toISOString(),
    });

    await this.save(blog);

    return blog;
  }
}

// @EntityRepository(Blog)
// export class BlogsRepository extends Repository<Blog> {
//   async createBlog(): Promise<Blog> {
//     const Blog = this.create({
//       title: 'test-title',
//       content: 'test-content',
//       status: BlogStatus.PUBLISHED,
//       createdAt: new Date().toISOString(),
//       updatedAt: new Date().toISOString(),
//     });

//     await this.save(Blog);

//     return Blog;
//   }
// }
