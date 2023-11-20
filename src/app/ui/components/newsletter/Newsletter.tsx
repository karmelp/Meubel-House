import './newsletter.scss';

const Newsletter = () => {
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