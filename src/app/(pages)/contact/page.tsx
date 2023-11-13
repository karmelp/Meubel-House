import Hero from '@/app/ui/components/Hero';
import heroImage from '@/public/hero-bg.jpg';
import InfoSection from '@/app/ui/components/InfoSection';
import React from 'react';
import Image from 'next/image';
import Pin from '@/public/pin.svg';
import Phone from '@/public/bxs_phone.svg';
import Clock from '@/public/bi_clock-fill.svg';
import './contact.scss';
import { svgPathData } from '@fortawesome/free-solid-svg-icons/fa2';
import BigBtn from '@/app/ui/components/BigBtn';

type Props = {}

const Contact = (props: Props) => {

  const breadcrumbs = [
    { text: 'Home', link: '/' },
    { text: 'Contact', link: '/contact' },
  ];

  return (
    <div className='contact-page'>
      <Hero 
        pageTitle="Contact"
        breadcrumbs={breadcrumbs}
        heroImage={heroImage}
      />

      <div className="page-info">
        <div className="upper-section">
          <h4>Get In Touch With Us</h4>
          <p>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        </div>
        <div className="lower-section">
          <div className="contact-details">
            <div className="contact">
              <Image src={Pin} alt='Pin' />
              <div className="details">
                <div className="title">Address</div>
                <div className="info">
                  236 5th SE Avenue, New York NY10000, United States
                </div>
              </div>
            </div>

            <div className="contact">
              <Image src={Phone} alt='Phone' />
              <div className="details">
                <div className="title">Phone</div>
                <div className="info">
                  Mobile: +(84) 546-6789
                  <br />
                  Hotline: +(84) 456-6789
                </div>
              </div>
            </div>

            <div className="contact">
              <Image src={Clock} alt='Clock' />
              <div className="details">
                <div className="title">Address</div>
                <div className="info">
                  Monday-Friday: 9:00 - 22:00
                  <br />
                  Saturday-Sunday: 9:00 - 21:00
                </div>
              </div>
            </div>
          </div>
          <form action="">
            <div className="input-cont">
              <label htmlFor="text">Your name</label>
              <input
                id="Name"
                type="text"
                placeholder='Abc'
              />
            </div>

            <div className="input-cont">
              <label htmlFor="text">Email address</label>
              <input
                id="Email"
                type="email"
                placeholder='Abc@def.com'
              />
            </div>

            <div className="input-cont">
              <label htmlFor="text">Subject</label>
              <input
                id="Subject"
                type="text"
                placeholder='This is optional'
              />
            </div>
            
            <div className="input-cont">
              <label htmlFor="text">Message</label>
              <textarea
                id="Message"
                placeholder='Hi! i’d like to ask about'
              />
            </div>

            <BigBtn title="Submit" />
          </form>
        </div>
      </div>

      <InfoSection />
    </div>
  );
};

export default Contact;