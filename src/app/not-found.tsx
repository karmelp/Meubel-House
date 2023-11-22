import Link from 'next/link';
import { Metadata } from 'next';

import BigBtn from '@/app/ui/components/bigBtn/BigBtn';

import './notFound.scss';

export const metadata: Metadata = {
  title: '404 - Not Found'
};

export default function NotFound() {
  return (
    <div className='not-found'>
      <h1>404</h1>
      <h6>Oops! That page can not be found.</h6>
      <p>Sorry, but the page you are looking for is not found. Please, make sure you have typed the current URL.</p>
      <Link href="/">
        <BigBtn title='Back To Homepage' />
      </Link>
    </div>
  );
}
