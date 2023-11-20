import Image from 'next/image';

import Star from '@/public/dashicons_star-filled.svg';
import EmptyStar from '@/public/dashicons_empty-filled-star.svg';

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const filledStars = Math.round(rating);
  const emptyStars = 5 - filledStars;

  return (
    <div className="star-rating">
      {[...Array(filledStars)].map((_, index) => (
        <Image key={index} src={Star} alt="Filled Star" className="star" />
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <Image key={index} src={EmptyStar} alt="Empty Star" className="star" />
      ))}
    </div>
  );
};

export default StarRating;
