import Hero from '@/app/ui/components/hero/Hero';
import InfoSection from '@/app/ui/components/infoSection/InfoSection';

import heroImage from '@/public/hero-bg.jpg';

import './privacy.scss';

const breadcrumbs = [
  { text: 'Home', link: '/' },
  { text: 'Privacy Policy', link: '/privacy-policy' },
];

const PrivacyPolicy = () => {
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

export default PrivacyPolicy;