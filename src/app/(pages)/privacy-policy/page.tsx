import Hero from '@/app/ui/components/Hero';
import heroImage from '@/public/hero-bg.jpg';
import InfoSection from '@/app/ui/components/InfoSection';
import React from 'react';
import './privacy.scss';

type Props = {}

const About = (props: Props) => {
  const breadcrumbs = [
    { text: 'Home', link: '/' },
    { text: 'Privacy Policy', link: '/privacy-policy' },
  ];

  return (
    <div className='privacy-page'>
      <Hero 
        pageTitle="Privacy Policy"
        breadcrumbs={breadcrumbs}
        heroImage={heroImage}
      />

      <InfoSection />
    </div>
  );
};

export default About;