'use client';
import dynamic from 'next/dynamic';

const MyAccountPage = dynamic(() => import('@/app/ui/components/myAccount/MyAccount'), {
  ssr: false,  // Set ssr to false to ensure it's a client-side component
});

const MyAccountClientWrapper: React.FC = () => {
  return <MyAccountPage />;
};

export default MyAccountClientWrapper;