"use client"
import React, { useState } from 'react';
import { Metadata } from 'next'
import './shop.scss'
import Hero from '../../ui/components/Hero';
import Pagination from '../../ui/components/Pagination';
import InfoSection from '../../ui/components/InfoSection';
import Link from 'next/link';
import ProductCard from '@/app/ui/components/ProductCard';
import Products from "../../ui/data/products"
const metadata: Metadata = {
  title: 'Shop',
}

type Props = {}

const productsPerPage = 16;
// const data: any[] = []; // Replace with your data structure (adjust the type accordingly)

function Shop() {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = Products?.slice(startIndex, endIndex);
  const totalPages = Math.ceil(Products?.length / productsPerPage);

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
         <Link href={`/shop/${encodeURIComponent(product.name)}`}>
         <ProductCard product={product} />
       </Link>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}


export default Shop