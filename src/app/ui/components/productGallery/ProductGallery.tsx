import { useState } from 'react';
import Image from 'next/image';

import './productGallery.scss';

interface ProductGalleryProps {
  images: string[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };
  console.log('images', images);

  return (
    <div className='product-gallery'>
      <div className='thumbnail-container'>
        <div className='thumbnails'>
          {images?.map((image, index) => (
            <Image
              key={index}
              className={`thumbnail 
              ${currentImageIndex === index ? 'active' : ''}
              `}
              onClick={() => handleThumbnailClick(index)}
              src={require(`@/public/${image}`).default}
              alt={`Product ${index}`}
            />
          ))}
        </div>
      </div>
      <div className='main-image'>
        <Image
          className='image'
          src={require(`@/public/${images[currentImageIndex]}`).default}
          alt={`Product ${currentImageIndex}`}
        />
      </div>
    </div>
  );
};

export default ProductGallery;
