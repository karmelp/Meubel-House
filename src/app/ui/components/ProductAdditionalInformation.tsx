import React from 'react';
import './productAdditionalInformation.scss';
interface ProductAdditonalInformationProps {
  product: {
    additionalInformation: string;
  };
}

const ProductAdditonalInformation: React.FC<ProductAdditonalInformationProps> = ({ product }) => {
  return (
    <div className='product-additional-info'>
      <div className='product-additional-info-text'><p>{product.additionalInformation}</p></div>
    </div>
  );
};

export default ProductAdditonalInformation;
