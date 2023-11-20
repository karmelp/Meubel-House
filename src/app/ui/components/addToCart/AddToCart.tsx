import { useState } from 'react';
import { useCart } from '@/app/lib/CartContext';

import BigBtn from '@/app/ui/components/bigBtn/BigBtn';

import './addToCart.scss';


interface AddToCartProps {
  product: any;
}

const AddToCart: React.FC<AddToCartProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart, setIsOpen } = useCart();

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity); 
    setIsOpen(true);
  };

  return (
    <div className='add-to-cart'>
      <div className="quantity">
        <button onClick={decreaseQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={increaseQuantity}>+</button>
      </div>

      <BigBtn title='Add To Cart' onClick={handleAddToCart} />
    </div>
  );
};

export default AddToCart;
