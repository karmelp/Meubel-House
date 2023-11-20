'use client';
import { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

import Hero from '@/app/ui/components/hero/Hero';
import LinkBtn from '@/app/ui/components/linkBtn/LinkBtn';
import Pagination from '@/app/ui/components/pagination/Pagination';
import InfoSection from '@/app/ui/components/infoSection/InfoSection';

import heroImage from '@/public/hero-bg.jpg';
import admin from '@/public/dashicons_admin-users.svg';
import date from '@/public/uis_calender.svg';
import category from '@/public/ci_tag.svg';
import search from '@/public/akar-icons_search.svg';

import './blog.scss';

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

const breadcrumbs = [
  { text: 'Home', link: '/' },
  { text: 'Blog', link: '/blog' },
];

export default function Blog() {
  const [data, setData] = useState<Blog[]>([]);
  const [allCategories, setAllCategories] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const response = await fetch('http://localhost:3001/blogPosts', {
          cache: 'no-store',
        });

        const allData = await response.json();
        const uniqueCategories = Object.keys(getUniqueCategoriesWithCounts(allData));
        setAllCategories(uniqueCategories);

        if (selectedCategory) {
          fetchAllData();
        } else {
          setData(allData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAllData();
  }, [selectedCategory]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleShowAllPosts = () => {
    setSelectedCategory(null);
  };

  const filteredData = selectedCategory ? data.filter((post) => post.category === selectedCategory) : data;

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentProducts = filteredData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredData.length / postsPerPage);

  const recentPosts = data
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return (
    <div className="blog-page">
      <Hero pageTitle="Blog" breadcrumbs={breadcrumbs} heroImage={heroImage} />

      <div className="blog-section">
        <div className="blog-posts">
          {currentProducts.map((post) => (
            <div key={post.id} className="post">
              <Image src={require(`@/public/${post.thumbnail}`)} alt='post' width={500} height={500} sizes="(max-width: 1400px) 100%" className='thumbnail'/>
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
                <Link className="category" href="#" onClick={handleShowAllPosts}>
                  <p>All Posts</p>
                  <p>{data.length}</p>
                </Link>
                {allCategories.map((category) => (
                  <Link key={category} href="#" 
                    className={`category ${selectedCategory === category ? 'active' : ''}`} 
                    onClick={() => handleCategoryClick(category)}>
                    <p>{category}</p>
                    <p>{getUniqueCategoriesWithCounts(data)[category]}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="recent">
            <div className='nav-heading'>Recent Posts</div>
            <div className="recent-posts">
              {recentPosts.map((post) => (
                <div key={post.id}>
                  <Link className='post' href={`/blog/${post.id}`}>
                    <Image src={require(`@/public/${post.thumbnail}`)} alt='post' width={80} height={80} className='thumbnail'/>
                    <div className="info">
                      <p className="title">{post.title}</p>
                      <p className='date'>{post.date}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {filteredData.length > postsPerPage && (
        <Pagination 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}

      <InfoSection />
    </div>
  );
}
