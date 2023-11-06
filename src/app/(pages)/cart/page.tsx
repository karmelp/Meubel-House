import Hero from '../../ui/components/Hero';
import InfoSection from '../../ui/components/InfoSection';
import React from 'react';
import './cart.scss';

type Props = {}

const Cart = (props: Props) => {

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

      <InfoSection />
    </div>
  );
};

export default Cart;