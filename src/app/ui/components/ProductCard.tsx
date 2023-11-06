import React from 'react';
import './productCard.scss';
import Image from 'next/image';
import logo from '@/public/logo.svg';
// import
interface ProductCardProps {
  product: {
    thumbnail: string;
    name: string;
    price: number;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Construct the image path using require
  // const thumbnailSrc = `/${product.thumbnail}`;
  // const thumbnailSrc = '/../../public/food2.png';
  // const thumbnailSrc = '/images/Asgaard-sofa.svg';
  // const thumbnailSrc = "../../../public/Asgaard-sofa.svg";
  const thumbnailSrc = require(`@/public/${product.thumbnail}`).default;
console.log("thumbnail =",thumbnailSrc)
  return (
    <div className="product-card">
      <Image className='image' src={thumbnailSrc} alt="Logo" />
     {/* <img className='image' src={logo} alt={product.name} /> */}
      <div className='title'>{product.name}</div>
      <div className='price'>Rs. {product.price}</div>
    </div>
  );
};

export default ProductCard;
