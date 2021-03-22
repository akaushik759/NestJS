import { BlogEntity } from './blog.entity';

describe('BlogEntity', () => {
  it('should be defined', () => {
    expect(new BlogEntity()).toBeDefined();
  });
});
