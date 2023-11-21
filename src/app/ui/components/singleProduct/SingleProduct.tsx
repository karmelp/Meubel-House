import { useState } from 'react';
import Image from 'next/image';

import ProductGallery from '@/app/ui/components/productGallery/ProductGallery';
import Sizes from '@/app/ui/components/sizes/Sizes';
import Colors from '@/app/ui/components/colors/Colors';
import AddToCart from '@/app/ui/components/addToCart/AddToCart';
import Rating from '@/app/ui/components/Rating';
import ProductTabs from '@/app/ui/components/productTabs/ProductTabs';
import ProductDescription from '@/app/ui/components/productDescription/ProductDescription';
import ProductAdditonalInformation from '@/app/ui/components/productAdditionalInformation/ProductAdditionalInformation';
import ProductReviews from '@/app/ui/components/productReviews/ProductReviews';
import RelatedProducts from '@/app/ui/components/relatedProducts/RelatedProducts';
import { formatNumber } from '@/app/lib/CartContext';
import fb from '@/public/akar-icons_facebook-fill.svg';
import linkedIn from '@/public/akar-icons_linkedin-box-fill.svg';
import twitter from '@/public/ant-design_twitter-circle-filled.svg';

import './singleProduct.scss';

interface SingleProductProps {
  product: {
    id : number;
    gallery: string[];
    additionalInformation: string;
    thumbnail: string;
    name: string;
    price: number;
    description: string;
    size?: string[];
    colors?: string[];
    SKU: string;
    category: string;
    tags?: string[];
    reviews: {
      id: number;
      name: string;
      comment: string;
      rating: number;
      image: string;
      date: string;
    }[];
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

  const tabs = [
    { name: 'Description', content: <ProductDescription product={product} /> },
    { name: 'Additional Information', content: <ProductAdditonalInformation product={product} /> },
    { name: `Reviews [${product.reviews.length}] `, content: <ProductReviews product={product} /> },
  ];

  return (
    <div className='single-product'>
      <ProductGallery images={product.gallery} />
      <div className='product-data'>
        <h1>{product.name}</h1>
        <div className='info'>
          <div className='price-container'>
            <div className='price'>Rs. {formatNumber(product.price)}</div>
            <Image
              src={require('@/public/favs.svg')}
              alt='Favorite'
              onClick={toggleFav}
            />
          </div>
          <div className='price-containercodecc'>
            <div className='rating '>
              <Rating />
            </div>
            <p className='review-count '>5 customer reviews</p>
          </div>
          <p>{product.description}</p>
          {hasSizeOptions && <Sizes sizes={product.size} />}
          {hasColorOptions && <Colors colors={product.colors} />}
          <AddToCart product={product} />          
        </div>
        <div className='details'>
          <div className='item'>
            <span>SKU</span>
            <span>:</span>
            <span>{product.SKU}</span>
          </div>
          <div className='item'>
            <span>Category</span>
            <span>:</span>
            <span>{product.category}</span>
          </div>
          <div className='item'>
            <span>Tags</span>
            <span>:</span>
            <span>{product.tags?.join(', ')}</span>
          </div>
          <div className='item'>
            <span>Share</span>
            <span>:</span>
            <span>
              <Image src={fb} alt='Share to Facebook' />
              <Image src={linkedIn} alt='Share to LinkedIn' />
              <Image src={twitter} alt='Share to Twitter' />
            </span>
          </div>
        </div>
      </div>
      <div className='divider'></div>
      <ProductTabs tabs={tabs} />
      <div className='divider'></div>
      <RelatedProducts />
    </div>
  );
};

export default SingleProduct;
