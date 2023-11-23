'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import LinkBtn from './ui/components/linkBtn/LinkBtn';
import SquareLinkBtn from './ui/components/squareLinkBtn/SquareLinkBtn';
import RoundLinkBtn from './ui/components/roundLinkBtn/RoundLinkBtn';
import ProductCard from './ui/components/productCard/ProductCard';

import hero from '@/public/Rocket single seater 1.png';
import Prod1 from '@/public/Granite-square-side-table.png';
import Prod2 from '@/public/Outdoor-bar-table-and-stool.png';
import NewArrivalImg from '@/public/Asgaard-sofa.png';

import Clock from '@/public/clock_outline.svg';
import Calendar from '@/public/uil_calender.svg';

import './home.scss';

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

    fetchData();
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
      <div className='hero'>
        <div className="content">
          <div className='info-section'>
            <h1>Rocket single seater</h1>
            <LinkBtn link={'/shop'} text='Shop Now' />
          </div>
          <Image src={hero} alt='Rocket single seater' />
        </div>
        
      </div>

      <div className='section_one'>
        <div className="content">
          <div className='product'>
            <div className="image">
              <Image src={Prod1} alt='Side table' />
            </div>
            <div className="info">
              <h6>Side table</h6>
              <LinkBtn link={'/shop'} text='View more' />
            </div>
          </div>
          <div className='product'>
            <div className="image">
              <Image src={Prod2} alt='Side table' />
            </div>
            <div className="info">
              <h6>Side table</h6>
              <LinkBtn link={'/shop'} text='View more' />
            </div>
          </div>
        </div>
      </div>

      <div className='section_two'>
        <div className='section-title'>
          <h4>Top Picks For You</h4>
          <p>
            Find a bright ideal to suit your taste with our great selection of suspension, floor and
            table lights.
          </p>
        </div>
        <div className='product-grid'>
          {products.slice(0, 4).map((product) => (
            <Link key={product.id} href={`/shop/${encodeURIComponent(product.id)}`}>
              <ProductCard product={product} />
            </Link>  
          ))}
        </div>
        <LinkBtn link={'/shop'} text='View more' />
      </div>

      <div className='section_three'>
        <div className="content">
          <div className='image'>
            <Image src={NewArrivalImg} alt='New arrival' />
          </div>
          <div className='info'>
            <div className='new-arrivals'>New Arrivals</div>
            <h2>Asgaard sofa</h2>
            {products.filter((product) => product.name === 'Asgaard sofa').map((product) => (
              <SquareLinkBtn key={product.id} link={`/shop/${encodeURIComponent(product.id)}`} text='Shop Now' />
            ))}
          </div>
        </div>
        
      </div>

      <div className='section_four'>
        <div className='section-title'>
          <h4>Our Blogs</h4>
          <p>Find a bright ideal to suit your taste with our great selection</p>
        </div>
        <div className='blog-section'>
          {blogPosts.slice(0, 3).map((blogPost) => (
            <Link className='blog-post' key={blogPost.id} href={`/blog/${encodeURIComponent(blogPost.id)}`}>
              <Image
                className='thumbnail'
                src={require(`@/public/${blogPost.thumbnail}`)}
                alt='post'
              />
              <div className="info">
                <p>{blogPost.title}</p>
                <LinkBtn link={`/blog/${encodeURIComponent(blogPost.id)}`} text='Read more' />
                <div className='meta'>
                  <div className="item">
                    <Image src={Clock} alt='clock' />
                    <span>{blogPost.time}</span>
                  </div>
                  <div className="item">
                    <Image src={Calendar} alt='calendar' />
                    <span>{blogPost.date}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <LinkBtn link={'/blog'} text='View All Post' />
      </div>

      <div className='section_five'>
        <div className='heading'>Our Instagram</div>
        <p>Follow our store on Instagram</p>
        <RoundLinkBtn link={'/'} text='Follow' />
      </div>
    </main>
  );
}
