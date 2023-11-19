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
import BigBtn from '@/app/ui/components/BigBtn';

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
          <CartTable cartItems={cartState.cartItems} />
        </div>
        
        <div className='cart-totals'>
          <h5>Cart Totals</h5>
          <div className='cart'>
            <div className="totals">
              <div className='section'>
                <p>Subtotal </p>
                <p className='subtotal-price'>Rs.{formatNumber(calculateSubtotal(cartState.cartItems))}</p>
              </div>
              <div className='section'>
                <p>Total</p>
                <div className='price'>Rs.{formatNumber(calculateSubtotal(cartState.cartItems))}</div>{' '}
              </div>
            </div>
            <Link href={'/checkout'}>
              <BigBtn title="Checkout" />
            </Link>
          </div>
        </div>
      </div>

      <InfoSection />
    </div>
  );
};

export default Cart;