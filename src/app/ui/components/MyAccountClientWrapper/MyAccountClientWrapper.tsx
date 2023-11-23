import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const MyAccountPage = dynamic(() => import('@/app/ui/components/myAccount/MyAccount'), {
  ssr: false,
});

const MyAccountClientWrapper: React.FC = () => {
  const router = useRouter();

  return <MyAccountPage router={router} />;
};

export default MyAccountClientWrapper;
