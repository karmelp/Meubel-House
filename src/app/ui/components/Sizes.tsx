"use client"
import React, { useState } from 'react';
import './sizes.scss'

interface SizesProps {
  sizes: string[] | undefined; // You can adjust the type accordingly
}

const Sizes: React.FC<SizesProps> = ({ sizes }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleSizeClick = (size: string) => {
    if (selectedSize === size) {
      // Deselect the size if it's already selected
      setSelectedSize(null);
    } else {
      // Select the size when clicked
      setSelectedSize(size);
    }
  };

  return (
    <div className="sizes-container">
      <div className='title'>Size</div>
      <div className='size-options'>
        {sizes?.map((size, index) => (
          <button
            key={index}
            className={selectedSize === size ? 'selected' : ''}
            onClick={() => handleSizeClick(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Sizes;

