import React from 'react';
import './cartSidebar.scss';
import CartItemCard from './cartCard';
import { useCart } from '@/app/lib/CartContext';
import { formatNumber } from '@/app/lib/CartContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface CartSidebarProps {
  isOpen: boolean;
  closeCart: () => void;
}
interface CartItem {
  product: {
    id: number;
    name: string;
    price: number;
    // Add other properties as needed
  };
  quantity: number;
  // Add other properties as needed
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, closeCart }) => {
  const { state: cartState,removeFromCart } = useCart();
  console.log("cart state",cartState)
  function calculateSubtotal(cartItems: CartItem[]): number {
    return cartItems.reduce((subtotal, item) => subtotal + item.product.price * item.quantity, 0);
  }

    return (
      isOpen === true && (
        <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
          <div className='cart-header'>
            <h3 className='cart-title'>Shopping cart</h3>
            <h3 className='cart-close' onClick={closeCart}>
             X
            </h3>
          </div>
          <div className='cart-content'>
         
        {cartState.cartItems.map((item) => (
          <CartItemCard
            key={item?.product?.id}
            imageSrc={item?.product?.gallery?.[0]}
            productName={item?.product?.name}
            quantity={item?.quantity}
            amount={item?.product?.price}
            onCloseClick={() => {console.log("clicked");
            removeFromCart(item?.product?.id);
            toast.success(`${item?.product?.name} removed from  the Cart`, {
              position: 'top-right', // Position of the toast
              autoClose: 3000, // Auto-close the toast after 3 seconds
              hideProgressBar: false, // Show progress bar
              closeOnClick: true, // Close on click
              pauseOnHover: true, // Pause the timer on hover
              draggable: true, // Make the toast draggable
            });}}
          />
        ))}
          </div>
          <div className="cart-totals">
        <div className="cart-subtotal">
          <h3 className="subtotal-label">SubTotal</h3>
          <h3 className="subtotal-amount">Rs.{formatNumber(calculateSubtotal(cartState.cartItems))}</h3>          
        </div>
      </div>
      <div className="cart-footer">
        <div className="cart-buttons">
          <button className="cart-button">View Cart</button>
          <button className="cart-button">Checkout</button>
        </div>
      </div>
        </div>
      )
    );      
};

export default CartSidebar;
