import { Metadata } from 'next';
import BlogPage from '@/app/ui/components/blogPage/Blog';

export const metadata: Metadata = {
  title: 'Blog'
};

const Blog = () => {
  return <BlogPage />;
};

export default Blog;