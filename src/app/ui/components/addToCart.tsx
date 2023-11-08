import React, { useState } from 'react';
import './addToCart.scss';
import { useCart } from '@/app/lib/CartContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface AddToCartProps {
  product: any; // Replace 'any' with the actual type of your product
}

const AddToCart: React.FC<AddToCartProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart(); // Access the addToCart function from the cart context

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
    toast.success(`${product?.name} added to the Cart`, {
      position: 'top-right', // Position of the toast
      autoClose: 3000, // Auto-close the toast after 3 seconds
      hideProgressBar: false, // Show progress bar
      closeOnClick: true, // Close on click
      pauseOnHover: true, // Pause the timer on hover
      draggable: true, // Make the toast draggable
    });// Add the product to the cart with the selected quantity
  };

  return (
    <div className='add-to-cart'>
      <div className="quantity">
        <button onClick={decreaseQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={increaseQuantity}>+</button>
      </div>

      <button className='add' onClick={handleAddToCart}>
        Add To Cart
      </button>
    </div>
  );
};

export default AddToCart;
