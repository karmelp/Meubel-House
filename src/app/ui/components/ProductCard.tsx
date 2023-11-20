import React from 'react';
import './productCard.scss';
import Image from 'next/image';
interface ProductCardProps {
  product: {
    id: number;
    thumbnail: string;
    name: string;
    price: number;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Construct the image path using require  
  const thumbnailSrc = require(`@/public/${product.thumbnail}`).default;
  return (
    <div className="product-card" key={product.id}>
      <Image className='image' src={thumbnailSrc} alt="Logo" />
      {/* <img className='image' src={logo} alt={product.name} /> */}
      <div className='title'>{product.name}</div>
      <div className='price'>Rs. {product.price}</div>
    </div>
  );
};

export default ProductCard;
