import { useState, useEffect } from 'react';
import Link from 'next/link';

import ProductCard from '@/app/ui/components/productCard/ProductCard';
import LinkBtn from '@/app/ui/components/linkBtn/LinkBtn';

import './relatedProducts.scss';

type Product = {
    id : number;
    gallery: string[];
    additionalInformation: string;
    thumbnail: string;
    name: string;
    price: number;
    description: string;
    size?: string[];
    colors?: string[];
    SKU: string;
    category: string;
    tags?: string[];
};

const RelatedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

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

  return (
    <div className='related-products'>
      <h4>Related Products</h4>
      <div className='product-grid'>
        {products.slice(0, 4).map((product) => (
          <Link key={product.id} href={`/shop/${encodeURIComponent(product.id)}`}>
            <ProductCard product={product} />
          </Link>  
        ))}
      </div>
      <LinkBtn link={'/shop'} text='View more' />
    </div>
  );
};
  

export default RelatedProducts;
