import React, { useState } from 'react';
import ProductGallery from './ProductGallery';
import favsIcon from '../icons/favs.svg';
import './singleProduct.scss';
import Sizes from './Sizes';
import Colors from './Colors';
import AddToCart from './addToCart';
import fb from '../icons/akar-icons_facebook-fill.svg';
import linkedIn from '../icons/akar-icons_linkedin-box-fill.svg';
import twitter from '../icons/ant-design_twitter-circle-filled.svg';
import Image from 'next/image';
interface SingleProductProps {
  product: {
    gallery: string[];
    name: string;
    price: number;
    description: string;
    size?: string[]; // Adjust the type accordingly
    colors?: string[]; // Adjust the type accordingly
    SKU: string;
    category: string;
    tags?: string[];
  };
}

const SingleProduct: React.FC<SingleProductProps> = ({ product }) => {
  // State to track whether it's a favorite
  const [isFav, setIsFav] = useState<boolean>(false);

  // Check if the product has size options
  const hasSizeOptions = product?.size && product.size.length > 0;

  // Check if the product has color options
  const hasColorOptions = product?.colors && product.colors.length > 0;

  // Function to toggle the favorite status
  const toggleFav = () => {
    setIsFav(!isFav);
  };

  // Style object to change the color of the SVG when it's a favorite
  const favIconStyle: React.CSSProperties = {
    fill: isFav ? 'red' : 'transparent',
    cursor: 'pointer',
  };

  return (
    <div className="single-product">
      <ProductGallery images={product.gallery} /> {/* Use ProductGallery component */}
      <div className='product-data'>
        <h1>{product.name}</h1>
        <div className="info">
          <div className='price-container'>
            <div className='price'>Rs. {product.price}</div>
            <Image src={require(`@/public/favs.svg`).default} alt="Favorite" style={favIconStyle} onClick={toggleFav} />
          </div>
          <p>{product.description}</p>
          {/* Render the Sizes component only if there are size options require(`@/public/${images[currentImageIndex]}` */}
          {hasSizeOptions && <Sizes sizes={product.size} />}
          {/* Render the Colors component only if there are color options */}
          {hasColorOptions && <Colors colors={product.colors} />}
          <AddToCart />
        </div>
        <div className="details">
          <div className="item">
            <span>SKU</span>
            <span>:</span>
            <span>{product.SKU}</span>
          </div>
          <div className="item">
            <span>Category</span>
            <span>:</span>
            <span>{product.category}</span>
          </div>
          <div className="item">
            <span>Tags</span>
            <span>:</span>
            <span>{product.tags?.join(', ')}</span>
          </div>
          <div className="item">
            <span>Share</span>
            <span>:</span>
            <span>
              <Image src={fb} alt="Share to Facebook" />
              <Image src={linkedIn} alt="Share to LinkedIn" />
              <Image src={twitter} alt="Share to Twitter" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
