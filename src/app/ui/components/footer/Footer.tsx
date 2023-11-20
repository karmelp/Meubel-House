import Link from 'next/link';

import Newsletter from '@/app/ui/components/newsletter/Newsletter';

import './footer.scss';

const Footer = () => {
  return (
    <footer>
      <div>
        <div className="address">
          400 University Drive Suite 200 Coral Gables,
          FL 33134 USA
        </div>
        <div>
          <h6>Links</h6>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
        <div>
          <h6>Help</h6>
          <nav>
            <Link href="#">Payment Options</Link>
            <Link href="#">Returns</Link>
            <Link href="#">Privacy Policies</Link>
          </nav>
        </div>
        <div className="newsletter">
          <h6>Newsletter</h6>
          <Newsletter />
        </div>
      </div>
      <div className="copy">2022 Meubel House. All rights reverved</div>
    </footer>
  );
};

export default Footer;