"use client"
import React, { useState } from 'react';
import { Metadata } from 'next'
import './shop.scss'
import Hero from '../../ui/components/Hero';
import Pagination from '../../ui/components/Pagination';
import InfoSection from '../../ui/components/InfoSection';

const metadata: Metadata = {
  title: 'Shop',
}

type Props = {}

const productsPerPage = 16;

const Shop = (props: Props) => {

  const [currentPage, setCurrentPage] = useState(1);

  // const startIndex = (currentPage - 1) * productsPerPage;
  // const endIndex = startIndex + productsPerPage;
  // const currentProducts = data?.slice(startIndex, endIndex);
  // const totalPages = Math.ceil(data?.length / productsPerPage);

  // const handlePageChange = (newPage) => {
  //   setCurrentPage(newPage);
  // };

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

      

      {/* <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      /> */}

      <InfoSection />
    </div>
  );
}

export default Shop