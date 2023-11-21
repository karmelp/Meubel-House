import Image from 'next/image';

import StarRating from '@/app/ui/components/StarRating';

import './productReviews.scss';

interface ProductReviewsProps {
  product: {
    id: number;
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

const ProductReviews: React.FC<ProductReviewsProps> = ({ product }) => {
  return (
    <div className="reviews-container">
      {product.reviews.map((review) => (
        <div key={review.id} className="review-item">
          <div className="user-info">
            <Image
              key={review.id}
              className='user-image'
              src={require(`@/public/${review.image}`).default}
              alt={review.image}/>
            <div>
              <p className="user-name">{review.name}</p>
              <p className="review-date">{review.date}</p>
            </div>
          </div>
          <div className="rating">
            <StarRating rating={review.rating} />
          </div>
          <p className="comment">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductReviews;