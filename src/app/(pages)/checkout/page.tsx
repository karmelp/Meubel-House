'use client';
import React from 'react';
import Hero from '../../ui/components/Hero';
import InfoSection from '../../ui/components/InfoSection';
import heroImage from '@/public/hero-bg.jpg';
import { useCart } from '@/app/lib/CartContext';
import './checkout.scss';
import BillingInfo from '@/app/ui/components/Billing';

type Props = {}
interface CartItem {
  product: {
    id: number;
    name: string;
    price: number;
  };
  quantity: number;
}
const Checkout = (props: Props) => {

  const breadcrumbs = [
    { text: 'Home', link: '/' },
    { text: 'Checkout', link: '/checkout' },
  ];

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