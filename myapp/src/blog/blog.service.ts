import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { title } from 'node:process';
import { Repository } from 'typeorm';
import { Blog } from './blog.entity';

@Injectable()
export class BlogService {
  blogs = {
    1: 'My first app',
    2: 'My first trip',
    3: 'How to code',
    4: 'Books I have read',
  };

  constructor(
    @InjectRepository(Blog) private blogsRepository: Repository<Blog>,
  ) {}

  getBlogs(): Promise<any> {
    return new Promise((resolve) => {
      resolve(this.blogs);
    });
  }
  getBlog(blogId): Promise<any> {
    let id = Number(blogId);
    return new Promise((resolve) => {
      resolve(this.blogs[id]);
    });
  }
  async addBlog(text, title): Promise<any> {
    const newBlog = {
      id: '' + Math.floor(Math.random() * 10000) + 1,
      title,
      text,
    };
    return await this.blogsRepository.insert(newBlog);
  }
}
