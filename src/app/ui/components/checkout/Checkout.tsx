'use client';

import Hero from '@/app/ui/components/hero/Hero';
import InfoSection from '@/app/ui/components/infoSection/InfoSection';
import BillingInfo from '@/app/ui/components/billing/Billing';

import heroImage from '@/public/hero-bg.jpg';

import './checkout.scss';

const breadcrumbs = [
  { text: 'Home', link: '/' },
  { text: 'Checkout', link: '/checkout' },
];

const Checkout = () => {
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