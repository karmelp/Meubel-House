import Image from 'next/image';

import './productDescription.scss';

interface ProductDescriptionProps {
  product: {
    id : number;
    gallery: string[];
    description: string;
  };
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({ product }) => {
  return (
    <div className='product-description'>
      <div className='product-description-text'><p>{product.description}</p></div>
      <div className='product-description-gallery'>
        {product.gallery.slice(0, 2).map((image, index) => (
          <div className="product-desc-img-container" key={product.id}>
            <Image
              key={product.id}
              className='image'
              src={require(`@/public/${image}`).default}
              alt={image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDescription;
