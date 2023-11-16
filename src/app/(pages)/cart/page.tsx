'use client';
import React from 'react';
import Hero from '@/app/ui/components/Hero';
import heroImage from '@/public/hero-bg.jpg';
import InfoSection from '@/app/ui/components/InfoSection';
import './cart.scss';
import { useCart } from '@/app/lib/CartContext';
import { formatNumber } from '@/app/lib/CartContext';
import Link from 'next/link';
import CartTable from '@/app/ui/components/cartTable';
type Props = {}

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
const Cart = (props: Props) => {
  const { state: cartState,removeFromCart } = useCart();
  console.log('cart state',cartState);
  // console.log("cart state",cartState)
  function calculateSubtotal(cartItems: CartItem[]): number {
    return cartItems.reduce((subtotal, item) => subtotal + item.product.price * item.quantity, 0);
  }
  const breadcrumbs = [
    { text: 'Home', link: '/' },
    { text: 'Cart', link: '/cart' },
  ];

  return (
    <div className='cart-page'>
      <Hero pageTitle='Cart' breadcrumbs={breadcrumbs} heroImage={heroImage} />
      <div className='cart-info'>
        <div className='cart-table'>
          <CartTable cartItems={cartState.cartItems} /> {/* Use the CartTable component */}
        </div>
        <div className='cart-totals'>
          <div className='cart-totals-card'>
            <h2>Cart Totals</h2>
            <div className='totals'>
              <div className='subtotal'>
                <div>Subtotal </div>
                <div> Rs.{formatNumber(calculateSubtotal(cartState.cartItems))}</div>
              </div>
              <div className='subtotal'>
                <div>Total</div>
                <div className='price'>Rs.{formatNumber(calculateSubtotal(cartState.cartItems))}</div>{' '}
              </div>
              {/* Add other totals here (e.g., tax, shipping) /checkout */}
            </div>
            <div className='checkout'>
              <Link href={`/checkout`}>
                <button className='checkout-button'>Checkout</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <InfoSection />
    </div>
  );
};

export default Cart;