import React from 'react';
import './hero.scss';
import Image, { StaticImageData } from 'next/image';
import logo from '@/public/logo.svg';
import Breadcrumbs from './Breadcrumbs';

type BreadcrumbItem = {
  text: string;
  link: string;
};

type Props = {
  pageTitle: string;
  breadcrumbs: BreadcrumbItem[];
  heroImage: StaticImageData | string;
};

const Hero: React.FC<Props> = ({ pageTitle, breadcrumbs, heroImage }) => {
  
  return (
    <div className="hero">
      <Image className='hero-bg' src={heroImage} alt='Background' width={400} height={400} />
      <div className="hero-content">
        <div className="content">
          <Image src={logo} alt="Logo" />
          <h2>{pageTitle}</h2>
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
