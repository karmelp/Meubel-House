"use client"
import React from 'react';
import Hero from '../../ui/components/Hero';
import InfoSection from '../../ui/components/InfoSection';
import './cart.scss';
import { useCart } from '@/app/lib/CartContext';
import { formatNumber } from '@/app/lib/CartContext';
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
  console.log("cart state",cartState)
  function calculateSubtotal(cartItems: CartItem[]): number {
    return cartItems.reduce((subtotal, item) => subtotal + item.product.price * item.quantity, 0);
  }
  const breadcrumbs = [
    { text: 'Home', link: '/' },
    { text: 'Cart', link: '/cart' },
  ];

  return (
    <div className='cart-page'>
      <Hero 
        pageTitle="Cart"
        breadcrumbs={breadcrumbs}
      />
       <div className="cart-content">
        <div className="cart-table">
          <CartTable cartItems={cartState.cartItems} /> {/* Use the CartTable component */}
        </div>
        <div className="cart-totals">
          <div className="cart-totals-card">
            <h2>Cart Totals</h2>
            <div className="totals">
              <div className="subtotal">
                Subtotal      Rs.{formatNumber(calculateSubtotal(cartState.cartItems))}
              </div>
              <div className="subtotal">
                Total       Rs.{formatNumber(calculateSubtotal(cartState.cartItems))}
              </div>
              {/* Add other totals here (e.g., tax, shipping) */}
            </div>
            <div className="checkout">
            <button className="checkout-button">Checkout</button></div>
          </div>
        </div>       
      </div>

      <InfoSection />
    </div>
  );
};

export default Cart;