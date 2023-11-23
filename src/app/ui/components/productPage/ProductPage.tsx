'use client';
import React, { useState, useEffect } from 'react';

import Breadcrumbs from '@/app/ui/components/breadcrumbs/Breadcrumbs';
import SingleProduct from '@/app/ui/components/singleProduct/SingleProduct';

import './singlePage.scss';

const SingleProductPage = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const productsFetch = await fetch(`http://localhost:3001/products/${params?.id}`, {
          cache: 'no-store',
        });
        const Products1 = await productsFetch.json();
        setProduct(Products1);
        setLoading(true);
        console.log('Data for page', Products1);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [params.id]);
  console.log('params ', params);

  const breadcrumbs = [
    { text: 'Home', link: '/' },
    { text: 'Shop', link: '/shop' },
    { text: (product as any)?.name, link: `/shop/${encodeURIComponent((product as any)?.name)}` },
  ];

  return (
    <>
      {loading ? (
        <div className='single-product-page'>
          <Breadcrumbs items={breadcrumbs} />
          <SingleProduct product={product as any} />
        </div>
      ) : null}
    </>
  );
};
export default SingleProductPage;
