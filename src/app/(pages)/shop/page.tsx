"use client"
import React, { useState,useEffect } from 'react';
import { Metadata } from 'next'
import './shop.scss'
import Hero from '../../ui/components/Hero';
import Pagination from '../../ui/components/Pagination';
import Link from 'next/link';
import ProductCard from '@/app/ui/components/ProductCard';
import InfoSection from '../../ui/components/InfoSection';
const metadata: Metadata = {
  title: 'Shop',
}

type Props = {}

const productsPerPage = 16;

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const productsFetch = await fetch('http://localhost:3001/products', {
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
      />

      <div className="product-grid">
        {currentProducts?.map((product) => (
         <Link href={`/shop/${encodeURIComponent((product as any)?.id)}`}>

         <ProductCard product={product} />
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


export default Shop