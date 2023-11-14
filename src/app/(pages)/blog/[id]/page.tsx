import Hero from '../../../ui/components/Hero';
import InfoSection from '../../../ui/components/InfoSection';
import React from 'react';
import Image from 'next/image';
import admin from '@/public/dashicons_admin-users.svg';
import date from '@/public/uis_calender.svg';
import category from '@/public/ci_tag.svg';
import './blogPost.scss';

interface BlogPost {
  title: string;
  thumbnail: string;
  content: string;
  author: string;
  date: string;
  category: string;
}

const blogPost = async ({ params }: {
  params: {
    id: string,
  }
}) => {

  const response = await fetch(`${process.env.API_URL}/blogPosts/${params.id}`);
  const post: BlogPost = await response.json();
  
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
        {post.content}
      </div>

      <InfoSection />
    </div>
  );
};

export default blogPost;