import React from 'react';
import './productCard.scss';
import Image from 'next/image';
interface ProductCardProps {
  product: {
    thumbnail: string;
    name: string;
    price: number;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Construct the image path using require
  // const thumbnailSrc = `/images/${product.thumbnail}`;
  // const thumbnailSrc = '/../../public/food2.png';
  // const thumbnailSrc = '/images/Asgaard-sofa.svg';
  const thumbnailSrc = "../../../public/Asgaard-sofa.svg";
  // const thumbnailSrc = require(`../data/images/${product.thumbnail}`).default;
console.log("thumbnail =",thumbnailSrc)
  return (
    <div className="product-card">
     <img className='image' src="/food2.png" alt={product.name} />
      <div className='title'>{product.name}</div>
      <div className='price'>Rs. {product.price}</div>
    </div>
  );
};

export default ProductCard;
