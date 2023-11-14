import Hero from '@/app/ui/components/Hero';
import heroImage from '@/public/hero-bg.jpg';
import InfoSection from '@/app/ui/components/InfoSection';
import React from 'react';
import './about.scss';

type Props = {}

const About = (props: Props) => {
  const breadcrumbs = [
    { text: 'Home', link: '/' },
    { text: 'About', link: '/about' },
  ];

  return (
    <div className='about-page'>
      <Hero 
        pageTitle="About"
        breadcrumbs={breadcrumbs}
        heroImage={heroImage}
      />

      <InfoSection />
    </div>
  );
};

export default About;