'use client';
import Hero from '@/app/ui/components/Hero';
import heroImage from '@/public/hero-bg.jpg';
import InfoSection from '@/app/ui/components/InfoSection';
import Image from 'next/image';
import Link from 'next/link';
import admin from '@/public/dashicons_admin-users.svg';
import date from '@/public/uis_calender.svg';
import category from '@/public/ci_tag.svg';
import search from '@/public/akar-icons_search.svg';
import './blog.scss';
import LinkBtn from '@/app/ui/components/LinkBtn';
import Pagination from '@/app/ui/components/Pagination';
import { useState, useEffect } from 'react';

const postsPerPage = 3;

type Blog = {
  id: number;
  thumbnail: string;
  author: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
};

export default function Blog() {
  // Create breadcrumbs
  const breadcrumbs = [
    { text: 'Home', link: '/' },
    { text: 'Blog', link: '/blog' },
  ];

  const [data, setData] = useState<Blog[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch all blog posts
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/blogPosts', {
        cache: 'no-store',
      });

      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Pagination
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentProducts = data?.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data?.length / postsPerPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  // Get all the categories
  const getUniqueCategoriesWithCounts = (posts: Blog[]) => {
    const categories: Record<string, number> = {};
    posts.forEach((post) => {
      if (post.category in categories) {
        categories[post.category]++;
      } else {
        categories[post.category] = 1;
      }
    });
    return categories;
  };

  const uniqueCategoriesWithCounts = getUniqueCategoriesWithCounts(data);

  return (
    <div className="blog-page">
      <Hero pageTitle="Blog" breadcrumbs={breadcrumbs} heroImage={heroImage} />

      <div className="blog-section">
        <div className="blog-posts">
          {currentProducts.map((post) => (
            <div key={post.id} className="post">
              <Image src={require(`@/public/${post.thumbnail}`).default} alt='post' width={500} height={500} sizes="(max-width: 1400px) 100%" className='thumbnail'/>
              <div className='post-content'>
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
                  <Link href={`/blog/${post.id}`} ><h6 className="title">{post.title}</h6> </Link> 
                  <div className="excerpt">
                    {post.excerpt}
                  </div>
                </div>
                <LinkBtn link={`/blog/${post.id}`} text='Read more' />
              </div>
            </div>
          ))}
        </div>
        <div className="blog-navi">
          <div className="nav">
            <div className="search-bar">
              <input type="text" />
              <Image src={search} alt='Icon' className='search-icon' />
            </div>
            <div className="categories">
              <div className='nav-heading'>Categories</div>
              <div className="cats">
                {Object.entries(uniqueCategoriesWithCounts).map(([category, count]) => (
                  <Link key={category} href="#" className="category">
                    <p>{category}</p>
                    <p>{count}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="recent">
            <div className='nav-heading'>Recent Posts</div>
          </div>
        </div>
      </div>

      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      <InfoSection />
    </div>
  );
}