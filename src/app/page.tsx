'use client';
import './home.scss';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ProductCard from './ui/components/ProductCard';
import Image from 'next/image';
import hero from '@/public/Rocket single seater 1.svg';
import Prod1 from '@/public/Granite-square-side-table.svg';
import Prod2 from '@/public/Round-coffee-table_color-2.svg';
import NewArrivalImg from '@/public/Asgaard-sofa.svg';
import LinkBtn from './ui/components/LinkBtn';
import SquareLinkBtn from './ui/components/SquareLinkBtn';
import Clock from '@/public/clock_outline.svg';
import Calendar from '@/public/uil_calender.svg';
import RoundLinkBtn from './ui/components/RoundLinkBtn';

type Product = {
  id: number;
  name: string;
  price: number;
  thumbnail: string;
  description: string;
  gallery: string[];
  size: string[];
  colors: string[];
  SKU: string;
  category: string;
  tags: string[];
};

type BlogPost = {
  id: string;
  title: string;
  thumbnail: string;
  content: string;
  author: string;
  date: string;
  time: string;
  category: string;
};

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const productsFetch = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
          cache: 'no-store',
        });
        const Products1 = await productsFetch.json();
        setProducts(Products1);
        console.log('Data for page', Products1);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []);

  useEffect(() => {
    // Fetch data from the API
    const fetchBlogData = async () => {
      try {
        const blogsFetch = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogPosts`, {
          cache: 'no-store',
        });
        const Blogs = await blogsFetch.json();
        setBlogPosts(Blogs);
        console.log('Blog data for page', Blogs);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchBlogData();
  }, []);

  return (
    <main className='home'>
      <div className='home_hero'>
        <div className='home_hero_info'>
          <h1>Rocket single seater</h1>
          <LinkBtn link={'/shop'} text='Shop Now' />
        </div>
        <Image className='home_hero_image' src={hero} alt='Rocket single seater' />
      </div>

      <div className='home_section_one'>
        <div className='home_section_one_prod'>
          <Image className='home_section_one_prod_side_table' src={Prod1} alt='Side table' />
          <h4>Side table</h4>
          <LinkBtn link={'/shop'} text='View more' />
        </div>
        <div className='home_section_one_prod'>
          <Image className='home_section_one_prod_side_table' src={Prod2} alt='Side table' />
          <h4>Side table</h4>
          <LinkBtn link={'/shop'} text='View more' />
        </div>
      </div>

      <div className='home_section_two'>
        <div className='home_section_two_header'>
          <h4 className='home_section_two_header_title'>Top Picks For You</h4>
          <h6 className='home_section_two_header_subtitle'>
            Find a bright ideal to suit your taste with our great selection of suspension, floor and
            table lights.
          </h6>
        </div>
        <div className='home_section_two_product'>
          {products.slice(0, 4).map((product) => (
            <Link href={`/shop/${encodeURIComponent(product.id)}`}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
        <div className='home_section_two_view_more'>
          <LinkBtn link={'/shop'} text='View more' />
        </div>
      </div>

      <div className='home_section_three'>
        <div className='home_section_three_left'>
          <Image className='home_section_three_left_image' src={NewArrivalImg} alt='new arrival' />
        </div>
        <div className='home_section_three_right'>
          <h6 className='home_section_three_right_text'>New Arrivals</h6>
          <h4 className='home_section_three_right_subtext'>Asgaard sofa</h4>
          <SquareLinkBtn link={'/shop'} text='Order Now' />
        </div>
      </div>

      <div className='home_section_four'>
        <div className='home_section_four_header'>
          <h4 className='home_section_four_header_title'>Our Blogs</h4>
          <h6 className='home_section_four_header_subtitle'>
            Find a bright ideal to suit your taste with our great selection
          </h6>
        </div>
        <div className='home_section_four_blog'>
          {blogPosts.slice(0, 3).map((blogPost) => (
            <Link href={`/blog/${encodeURIComponent(blogPost.id)}`}>
              <div className='home_section_four_blog_item'>
                <Image
                  className='home_section_four_blog_item_image'
                  src={require(`@/public/${blogPost.thumbnail}`)}
                  alt='post'
                />
                <h6 className='home_section_four_blog_item_title'>{blogPost.title}</h6>
                <LinkBtn link={`/blog/${encodeURIComponent(blogPost.id)}`} text='Read more' />
                <div className='home_section_four_blog_item_info'>
                  <Image
                    className='home_section_four_blog_item_info_clock'
                    src={Clock}
                    alt='clock'
                  />{' '}
                  <span className='home_section_four_blog_item_info_time'>{blogPost.time}</span>
                  <Image
                    className='home_section_four_blog_item_info_calendar'
                    src={Calendar}
                    alt='calendar'
                  />{' '}
                  <span className='home_section_four_blog_item_info_date'>{blogPost.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className='home_section_four_view_all'>
          <LinkBtn link={'/blog'} text='View All Post' />
        </div>
      </div>

      <div className='home_section_five'>
        <h4 className='home_section_five_title'>Our Instagram</h4>
        <h6 className='home_section_five_subtitle'>Follow our store on Instagram</h6>
        <RoundLinkBtn link={'/'} text='Follow' />
      </div>
    </main>
  );
}
