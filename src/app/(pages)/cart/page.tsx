'use client';
import Link from 'next/link';

import { useCart } from '@/app/lib/CartContext';
import { formatNumber } from '@/app/lib/CartContext';

import Hero from '@/app/ui/components/hero/Hero';
import InfoSection from '@/app/ui/components/infoSection/InfoSection';
import CartTable from '@/app/ui/components/cartTable/CartTable';
import BigBtn from '@/app/ui/components/bigBtn/BigBtn';

import heroImage from '@/public/hero-bg.jpg';

import './cart.scss';

interface CartItem {
  product: {
    id: number;
    name: string;
    price: number;
  };
  quantity: number;
}

const breadcrumbs = [
  { text: 'Home', link: '/' },
  { text: 'Cart', link: '/cart' },
];

const Cart = () => {
  const { state: cartState } = useCart();
  
  const isCartEmpty = cartState.cartItems.length === 0;

  function calculateSubtotal(cartItems: CartItem[]): number {
    return cartItems.reduce((subtotal, item) => subtotal + item.product.price * item.quantity, 0);
  }

  return (
    <div className='cart-page'>
      <Hero pageTitle='Cart' breadcrumbs={breadcrumbs} heroImage={heroImage} />

      {isCartEmpty ? (
        <div className='empty-cart-message'>
          <p>Your cart is empty. Add some products to your cart.</p>
          <Link href={'/shop'}>
            <BigBtn title="Shop" />
          </Link>
        </div>
      ) : (
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
                  <p className='subtotal-price'>Rs. {formatNumber(calculateSubtotal(cartState.cartItems))}</p>
                </div>
                <div className='section'>
                  <p>Total</p>
                  <div className='price'>Rs. {formatNumber(calculateSubtotal(cartState.cartItems))}</div>{' '}
                </div>
              </div>
              <div className='checkout'>
                <Link href={'/checkout'}>
                  <BigBtn title="Checkout" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <InfoSection />
    </div>
  );
};

export default Cart;