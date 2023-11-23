import { Metadata } from 'next';
import CartPage from '@/app/ui/components/cart/Cart';

export const metadata: Metadata = {
  title: 'Cart'
};

const Cart = () => {
  return <CartPage />;
};

export default Cart;