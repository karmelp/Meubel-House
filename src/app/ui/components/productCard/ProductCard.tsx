import Image from 'next/image';
import { formatNumber } from '@/app/lib/CartContext';
import './productCard.scss';

interface ProductCardProps {
  product: {
    id: number;
    thumbnail: string;
    name: string;
    price: number;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const thumbnailSrc = require(`@/public/${product.thumbnail}`);
  return (
    <div className="product-card" key={product.id}>
      <Image className='image' src={thumbnailSrc} alt="Logo" />
      <div className='title'>{product.name}</div>
      <div className='price'>Rs. {formatNumber(product.price)}</div>
    </div>
  );
};

export default ProductCard;
