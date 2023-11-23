import { Metadata } from 'next';
import MyAccountPage from '@/app/ui/components/myAccount/MyAccount';

export const metadata: Metadata = {
  title: 'My Account'
};

const MyAccount = () => {
  return <MyAccountPage />;
};

export default MyAccount;