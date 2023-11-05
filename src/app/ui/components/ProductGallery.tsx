import React, { useState } from 'react';
import './productGallery.scss';

interface ProductGalleryProps {
  images: string[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="product-gallery">
      <div className="thumbnail-container">
        <div className="thumbnails">
          {images.map((image, index) => (
            <div
              key={index}
              className={`thumbnail ${currentImageIndex === index ? 'active' : ''}`}
              onClick={() => handleThumbnailClick(index)}
            >
              <img src={require(`../data/images/${image}`).default} alt={`Product ${index}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="main-image">
        <img src={require(`../data/images/${images[currentImageIndex]}`).default} alt={`Product ${currentImageIndex}`} />
      </div>
    </div>
  );
};

export default ProductGallery;
