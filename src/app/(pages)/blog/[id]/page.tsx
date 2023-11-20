import Link from 'next/link';
import Image from 'next/image';

import Hero from '@/app/ui/components/hero/Hero';
import InfoSection from '@/app/ui/components/infoSection/InfoSection';

import admin from '@/public/dashicons_admin-users.svg';
import date from '@/public/uis_calender.svg';
import category from '@/public/ci_tag.svg';

import './blogPost.scss';

interface BlogPost {
  id: string;
  title: string;
  thumbnail: string;
  content: string;
  author: string;
  date: string;
  category: string;
}

interface BlogPostWithNavigation extends BlogPost {
  nextPost?: { id: string; title: string };
  prevPost?: { id: string; title: string };
}

const blogPost = async ({ params }: {
  params: {
    id: string,
  }
}) => {
  // Fetch current post
  const response = await fetch(`${process.env.API_URL}/blogPosts/${params.id}`);
  const post: BlogPost = await response.json();

  // Fetch next and previous posts
  const [prevResponse, nextResponse] = await Promise.all([
    fetch(`${process.env.API_URL}/blogPosts/${parseInt(params.id, 10) - 1}`),
    fetch(`${process.env.API_URL}/blogPosts/${parseInt(params.id, 10) + 1}`),
  ]);

  const [prevPost, nextPost]: BlogPost[] = await Promise.all([
    prevResponse.json().catch(() => null),
    nextResponse.json().catch(() => null),
  ]);

  const postWithNavigation: BlogPostWithNavigation = {
    ...post,
    prevPost: prevPost && prevPost.title ? { id: prevPost.id, title: prevPost.title } : undefined,
    nextPost: nextPost && nextPost.title ? { id: nextPost.id, title: nextPost.title } : undefined,
  };
  
  const breadcrumbs = [
    { text: 'Home', link: '/' },
    { text: 'Blog', link: '/blog' },
    { text: `${post.title}`, link: `/blog/${params.id}`}
  ];

  return (
    <div className='blog-post'>
      <Hero 
        pageTitle= {post.title}
        breadcrumbs={breadcrumbs}
        heroImage={require(`@/public/${post.thumbnail}`)}
      />

      <div className="single-blog-post">
        <div className="meta">
          <div className="item">
            <Image src={admin} alt='Author' />
            {post.author}
          </div>
          <div className="item">
            <Image src={date} alt='Date' />
            {post.date}
          </div>
          <div className="item">
            <Image src={category} alt='Category' />
            {post.category}
          </div>
        </div>

        <div className="content">
          {post.content.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="navigation-links">
          {postWithNavigation.prevPost && (
            <Link href={`/blog/${postWithNavigation.prevPost.id}`} className="prev-post">{`← ${postWithNavigation.prevPost.title}`}</Link>
          )}
          {postWithNavigation.nextPost && (
            <Link href={`/blog/${postWithNavigation.nextPost.id}`} className="next-post">{`${postWithNavigation.nextPost.title} →`}</Link>
          )}
        </div>
      </div>

      <InfoSection />
    </div>
  );
};

export default blogPost;