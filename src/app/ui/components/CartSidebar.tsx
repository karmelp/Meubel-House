import React from 'react';
import './cartSidebar.scss';
import CartItemCard from './cartCard';
import { useCart } from '@/app/lib/CartContext';
import { formatNumber } from '@/app/lib/CartContext';
import { toast } from 'react-toastify';
import Link from 'next/link';
import Image from 'next/image';
import 'react-toastify/dist/ReactToastify.css';
import CartClose from '@/public/cartClose.svg';

interface CartSidebarProps {
  isOpen: boolean;
  closeCart: () => void;
}
interface CartItem {
  product: {
    id: number;
    name: string;
    price: number;
  };
  quantity: number;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, closeCart }) => {
  const { state: cartState, removeFromCart } = useCart();

  const isOpenContext = cartState.isOpen;
  const shouldRenderSidebar = isOpen || isOpenContext;

  function calculateSubtotal(cartItems: CartItem[]): number {
    return cartItems.reduce((subtotal, item) => subtotal + item.product.price * item.quantity, 0);
  }

  return (
    shouldRenderSidebar && (
      <div className={`cart-sidebar ${shouldRenderSidebar ? 'open' : ''}`}>
        <div className='cart-header'>
          <div className='cart-title'>Shopping cart</div>
          <Link href="#" onClick={closeCart}>
            <Image src={CartClose} alt='Close' />
          </Link>
        </div>
        <div className='cart-content'>
          {cartState.cartItems.length > 0 ? (
            cartState.cartItems.map((item) => (
              <CartItemCard
                key={item?.product?.id}
                imageSrc={item?.product?.gallery?.[0]}
                productName={item?.product?.name}
                quantity={item?.quantity}
                amount={item?.product?.price}
                onCloseClick={() => {
                  removeFromCart(item?.product?.id);
                }}
              />
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
        {cartState.cartItems.length > 0 && (
          <div className='cart-subtotal'>
            <p>SubTotal</p>
            <p className='subtotal-amount'>
              Rs.{formatNumber(calculateSubtotal(cartState.cartItems))}
            </p>
          </div>
        )}
        <div className='cart-footer'>
          <Link href={'/cart'} onClick={closeCart}>
            <p className='cart-button'>View Cart</p>
          </Link>
          <Link href={'/checkout'} onClick={closeCart}>
            <p className='cart-button'>Checkout</p>
          </Link>
        </div>
      </div>
    )
  );
};

export default CartSidebar;
