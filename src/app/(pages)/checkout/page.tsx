"use client"
import React from 'react';
import Hero from '../../ui/components/Hero';
import InfoSection from '../../ui/components/InfoSection';
import heroImage from '@/public/hero-bg.jpg';
import { useCart } from '@/app/lib/CartContext';
import './checkout.scss';
import { formatNumber } from '@/app/lib/CartContext';
import BillingForm from '@/app/ui/components/Billing';
import BillingInfo from '@/app/ui/components/billing2';

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
    <div>
      <Hero 
        pageTitle="Checkout"
        breadcrumbs={breadcrumbs}
        heroImage={heroImage}
      />      
      <BillingInfo />
      <InfoSection />
    </div>
  );
};

export default Checkout;