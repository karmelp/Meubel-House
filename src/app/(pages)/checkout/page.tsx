"use client"
import React from 'react';
import Hero from '../../ui/components/Hero';
import InfoSection from '../../ui/components/InfoSection';
import heroImage from '@/public/hero-bg.jpg';
import { useCart } from '@/app/lib/CartContext';
import './checkout.scss';
import { formatNumber } from '@/app/lib/CartContext';
import BillingForm from '@/app/ui/components/Billing';

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
const Checkout = (props: Props) => {
  const { state: cartState,removeFromCart } = useCart();
  // console.log("cart state",cartState)
  function calculateSubtotal(cartItems: CartItem[]): number {
    return cartItems.reduce((subtotal, item) => subtotal + item.product.price * item.quantity, 0);
  }
  const breadcrumbs = [
    { text: 'Home', link: '/' },
    { text: 'Checkout', link: '/checkout' },
  ];
  const onSubmit = (data: any) => {
    console.log(data); // Handle form submission logic here
  };

  return (
    <div className='checkout-page'>
      <Hero 
        pageTitle="Checkout"
        breadcrumbs={breadcrumbs}
        heroImage={heroImage}
      />
      <div className="cart-content">
        <div className="cart-table">
         <BillingForm onSubmit={onSubmit}/>
        </div>
        <div className="cart-totals">
          <div className="cart-totals-card">
            {/* <h2>Cart Totals</h2> */}
            <div className="totals">
              <div className="subtotal">
                Subtotal      Rs.{formatNumber(calculateSubtotal(cartState.cartItems))}
              </div>
              <div className="subtotal">
                Total       Rs.{formatNumber(calculateSubtotal(cartState.cartItems))}
              </div>              
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

export default Checkout;