import './home.scss';
import Image from 'next/image';
import hero from '@/public/Rocket single seater 1.svg';
import Prod1 from '@/public/Granite-square-side-table.svg';
import Prod2 from '@/public/Round-coffee-table_color-2.svg';
import LinkBtn from './ui/components/LinkBtn';

export default function Home() {
  return (
    <main className='home-page'>
      <div className="home-hero">
        <div className="info">
          <h1>Rocket single seater</h1>
          <LinkBtn link={'/shop'} text='Shop Now' />
        </div>
        <Image className='hero-image' src={hero} alt='Rocket single seater' />
      </div>

      <div className="section-one">
        <div className="prod">
          <Image className='side-table' src={Prod1} alt='Side table' />
          <h4>Side table</h4>
          <LinkBtn link={'/shop'} text='View more' />
        </div>
        <div className="prod">
          <Image className='side-table' src={Prod2} alt='Side table' />
          <h4>Side table</h4>
          <LinkBtn link={'/shop'} text='View more' />
        </div>
      </div>
    </main>
  );
}