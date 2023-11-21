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
      <div className='description'>{product.description}</div>
      <div className='gallery'>
        {product.gallery.slice(0, 2).map((image) => (
          <div className="product-desc-img-container" key={product.id}>
            <Image
              key={product.id}
              src={require(`@/public/${image}`)}
              alt={image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDescription;
