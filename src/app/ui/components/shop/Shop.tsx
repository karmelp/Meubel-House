'use client';
import { useState,useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { API_BASE_URL } from '@/api/config';

import Hero from '@/app/ui/components/hero/Hero';
import FilterBtn from '@/public/system-uicons_filtering.svg';
import Pagination from '@/app/ui/components/pagination/Pagination';
import InfoSection from '@/app/ui/components/infoSection/InfoSection';
import ProductCard from '@/app/ui/components/productCard/ProductCard';

import Grid from '@/public/ci_grid-big-round.svg';
import List from '@/public/bi_view-list.svg';

import heroImage from '@/public/hero-bg.jpg';

import './shop.scss';

interface Product {
  id: number;
  thumbnail: string;
  name: string;
  price: number;
}

function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [productsPerPage, setProductsPerPage] = useState<number>(16);


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
  // console.log("product here",products);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products?.slice(startIndex, endIndex);
  const totalPages = Math.ceil(products?.length / productsPerPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const breadcrumbs = [
    { text: 'Home', link: '/' },
    { text: 'Shop', link: '/shop' },
  ];

  return (
    <div className="shop-page">
      <Hero
        pageTitle="Shop"
        breadcrumbs={breadcrumbs}
        heroImage={heroImage}
      />

      <div className="filter-bar">
        <div className="content">
          <div className="left">
            <Link href="#" className="filters">
              <Image src={FilterBtn} alt="Filters" /> Filter
            </Link>
            <div className="views">
              <Link href="#"><Image src={Grid} alt="Grid view" /></Link>
              <Link href="#"><Image src={List} alt="List view" /></Link>
            </div>
            
            <div className="divider"></div>
            Showing {startIndex + 1}-{endIndex > products.length ? products.length : endIndex} of {products.length} results
          </div>
          <div className="right">
            <div className="show">
              Show
              <input
                type="number"
                value={productsPerPage}
                onChange={(e) => setProductsPerPage(Math.max(1, Number(e.target.value)))}
              />
            </div>
            <div className="sort">
              Sort by
              <select>
                <option value="">Default</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="product-grid">
        {currentProducts?.map((product) => (
          <Link key={product.id} href={`/shop/${encodeURIComponent((product as any)?.id)}`}>
            <ProductCard key={product.id}  product={product} />
          </Link>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <InfoSection/>
    </div>
  );
}

export default Shop;