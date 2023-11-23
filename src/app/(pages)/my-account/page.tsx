import { Metadata } from 'next';
import MyAccountClientWrapper from '@/app/ui/components/MyAccountClientWrapper/MyAccountClientWrapper';

export const metadata: Metadata = {
  title: 'My Account',
};

const MyAccount: React.FC = () => {
  return <MyAccountClientWrapper />;
};

export default MyAccount;