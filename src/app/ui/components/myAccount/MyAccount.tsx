'use client';
import { useAuth } from '@/app/lib/AuthContext';
import { useRouter } from 'next/navigation';

import Hero from '@/app/ui/components/hero/Hero';
import InfoSection from '@/app/ui/components/infoSection/InfoSection';
import LoginRegisterForms from '@/app/ui/components/loginRegisterForm/LoginRegisterForm';
import Dashboard from '@/app/ui/components/dashboard/Dashboard';

import heroImage from '@/public/hero-bg.jpg';

const breadcrumbs = [
  { text: 'Home', link: '/' },
  { text: 'My Account', link: '/my-account' },
];

const MyAccountPage: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      <Hero pageTitle='My Account' breadcrumbs={breadcrumbs} heroImage={heroImage} />

      {isAuthenticated ? <Dashboard /> : <LoginRegisterForms />}

      <InfoSection />
    </div>
  );
};

export default MyAccountPage;
