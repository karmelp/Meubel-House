'use client';
import React from 'react';

import Breadcrumbs from '@/app/ui/components/breadcrumbs/Breadcrumbs';
import SingleProduct from '@/app/ui/components/singleProduct/SingleProduct';

import './singlePage.scss';

const SingleProductPage = ({ product }: { product: any }) => {
  const breadcrumbs = [
    { text: 'Home', link: '/' },
    { text: 'Shop', link: '/shop' },
    { text: (product as any)?.name, link: `/shop/${encodeURIComponent((product as any)?.name)}` },
  ];

  return (
    <>
      {product ? (
        <div className='single-product-page'>
          <Breadcrumbs items={breadcrumbs} />
          <SingleProduct product={product as any} />
        </div>
      ) : null}
    </>
  );
};
export default SingleProductPage;
