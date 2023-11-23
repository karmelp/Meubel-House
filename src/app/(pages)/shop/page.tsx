import { Metadata } from 'next';

import ShopPage from '@/app/ui/components/shop/Shop';

export const metadata: Metadata = {
  title: 'Shop'
};

const Shop = () => {
  return <ShopPage />;
};

export default Shop;