import { Controller, Get, Param, Post, Body, Query } from '@nestjs/common';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {
  constructor(private blogService: BlogService) {}
  @Get()
  async getBlogs() {
    const blogs = await this.blogService.getBlogs();
    return blogs;
  }

  @Get(':blogId')
  async getBlog(@Param('blogId') blogId) {
    const blog = await this.blogService.getBlog(blogId);
    return blog;
  }

  @Post()
  async addBlog(@Body() bodyParams) {
    return this.blogService.addBlog(bodyParams.title, bodyParams.text);
  }
}
