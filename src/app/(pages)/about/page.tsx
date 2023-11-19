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

      <div className="about">
        <p>Meubel House was founded on the simple idea of bringing sustainably sourced, meticulously crafted, impeccably designed, and built-to-last luxury furniture to your home.  At Meubel House, we believe in designing and crafting intuitively iconic pieces of furniture that exude luxury elegance and effortless comfort. We conceptualize and design every piece to be rich in detail, high in comfort, and best in functionality. From visual interest to texture, to shape to the minute tailored details, we meticulously craft our collection of living, dining, and outdoor furniture to become a point of pride at your home.</p>
        <p>At the heart of Meubel House is our dedicated and skilled team of artisans and craftsmen that we have carefully chosen to work with us and their deep appreciation for the maker’s touch. And we go the extra mile to achieve excellence, thanks to their craftsmanship and several decades of experience behind them. With hand-selection of premium materials considering their texture, uniqueness, and longevity, coupled with a thoughtful selection of tones and designs, we ensure the quality of our pieces is bespoke without forgetting to highlight the inherent beauty of materials. </p>
      </div>

      <InfoSection />
    </div>
  );
};

export default About;