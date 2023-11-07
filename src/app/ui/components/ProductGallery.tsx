import React, { useState } from 'react';
import './productGallery.scss';
import Image from 'next/image';
interface ProductGalleryProps {
  images: string[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };
  console.log("images",images)

  return (
    <div className="product-gallery">
      <div className="thumbnail-container">
        <div className="thumbnails">
          {images?.map((image, index) => (
            <div
              key={index}
              className={`thumbnail ${currentImageIndex === index ? 'active' : ''}`}
              onClick={() => handleThumbnailClick(index)}
            >
               <Image className='image' src={require(`@/public/${image}`).default} alt={`Product ${index}`} />
              {/* <img src={require(`../data/images/${image}`).default} alt={`Product ${index}`} /> */}
            </div>
          ))}
        </div>
      </div>
      <div className="main-image">
      <Image className='image' src={require(`@/public/${images[currentImageIndex]}`).default} alt={`Product ${currentImageIndex}`} />
        {/* <img src={require(`../data/images/${images[currentImageIndex]}`).default} alt={`Product ${currentImageIndex}`} /> */}
      </div>
    </div>
  );
};

export default ProductGallery;
