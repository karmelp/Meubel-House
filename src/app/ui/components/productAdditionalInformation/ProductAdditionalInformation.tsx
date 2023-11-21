import './productAdditionalInformation.scss';

interface ProductAdditonalInformationProps {
  product: {
    additionalInformation: string;
  };
}

const ProductAdditonalInformation: React.FC<ProductAdditonalInformationProps> = ({ product }) => {
  return (
    <div className='product-additional-info'>
      <p>{product.additionalInformation}</p>
    </div>
  );
};

export default ProductAdditonalInformation;
