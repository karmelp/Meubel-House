import React, { useState, useEffect } from 'react';
import './relatedProducts.scss';
import Link from 'next/link';
import ProductCard from './ProductCard';
import LinkBtn from './LinkBtn';

type Product = {
    id : number;
    gallery: string[];
    additionalInformation: string;
    thumbnail: string;
    name: string;
    price: number;
    description: string;
    size?: string[]; // Adjust the type accordingly
    colors?: string[]; // Adjust the type accordingly
    SKU: string;
    category: string;
    tags?: string[];
    reviews: {
      id: number;
      name: string;
      comment: string;
      rating: number;
      image: string;
      date: string;
    }[];
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
    
        fetchData(); // Call the fetchData function when the component mounts
      }, []);

    return (
        <div className='related_products'>
        <div className='related_products_header'>
          <h4 className='related_products_header_title'>Related Products</h4>
        </div>
        <div className='related_products_grid'>
          {products.slice(0, 4).map((product) => (
            <Link href={`/shop/${encodeURIComponent(product.id)}`}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
        <div className='related_products_view_more'>
          <LinkBtn link={'/shop'} text='View more' />
        </div>
      </div>
    );

}
  

export default RelatedProducts;
