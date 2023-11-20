import React from 'react';
import './newsletter.scss';

type Props = {}

const Newsletter = (props: Props) => {
  return (
    <div className='newsletter-component'>
      <form method='post'>
        <input id='member[email]' placeholder='Enter Your Email Address' required />
      </form>
      <button type='submit'>Subscribe</button>
    </div>
  );
};

export default Newsletter;