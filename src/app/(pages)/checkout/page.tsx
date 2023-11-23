import { Metadata } from 'next';
import CheckoutPage from '@/app/ui/components/checkout/Checkout';

export const metadata: Metadata = {
  title: 'Checkout'
};

const Checkout = () => {
  return <CheckoutPage />;
};

export default Checkout;