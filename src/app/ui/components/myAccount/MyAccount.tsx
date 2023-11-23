import { useContext } from 'react';
import { AuthContext } from '@/app/lib/AuthContext';
import { useRouter } from 'next/router';

import Hero from '@/app/ui/components/hero/Hero';
import InfoSection from '@/app/ui/components/infoSection/InfoSection';
import LoginRegisterForms from '@/app/ui/components/loginRegisterForm/LoginRegisterForm';
import Dashboard from '@/app/ui/components/dashboard/Dashboard';

import heroImage from '@/public/hero-bg.jpg';

import './myAccount.scss';

interface MyAccountPageProps {
  router: ReturnType<typeof useRouter>;
}

const breadcrumbs = [
  { text: 'Home', link: '/' },
  { text: 'My Account', link: '/my-account' },
];

const MyAccountPage: React.FC<MyAccountPageProps> = ({ router }) => {
  const context = useContext(AuthContext);

  return (
    <div>
      <Hero 
        pageTitle="My Account"
        breadcrumbs={breadcrumbs}
        heroImage={heroImage}
      />
            
      {context.isAuthenticated ? (
        <Dashboard />
      ) : (
        <LoginRegisterForms router={router} />
      )}

      <InfoSection />
    </div>
  );
};

export default MyAccountPage;