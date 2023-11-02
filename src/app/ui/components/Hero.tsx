import React from 'react';
import './hero.scss';
import Image from 'next/image';
import BGpic from '@/public/hero-bg.jpg';
import logo from '@/public/logo.svg';
import Breadcrumbs from './Breadcrumbs';

type BreadcrumbItem = {
  text: string;
  link: string;
};

type Props = {
  pageTitle: string;
  breadcrumbs: BreadcrumbItem[];
};

const Hero = ({ pageTitle, breadcrumbs }: Props) => {
  return (
    <div className="hero">
      <Image className='hero-bg' src={BGpic} alt='Background' />
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
