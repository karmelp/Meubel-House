'use client';
import Hero from '@/app/ui/components/Hero';
import InfoSection from '@/app/ui/components/InfoSection';
import LoginRegisterForms from '@/app/ui/components/LoginRegisterForm';
import Dashboard from '@/app/ui/components/Dashboard';
import React from 'react';
import heroImage from '@/public/hero-bg.jpg';
import { AuthContext } from '@/app/lib/AuthContext';
import { useContext } from 'react';

type Props = {}

const MyAccount = (props: Props) => {
  const context = useContext(AuthContext);

  const breadcrumbs = [
    { text: 'Home', link: '/' },
    { text: 'My Account', link: '/my-account' },
  ];

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
        <LoginRegisterForms />
      )}

      <InfoSection />
    </div>
  );
};

export default MyAccount;