import Link from 'next/link';
import Image from 'next/image';

import arrow from '@/public/arrow.svg';

import './breadcrumbs.scss';

type BreadcrumbItem = {
  text: string;
  link: string;
};

type Props = {
  items: BreadcrumbItem[];
};

const Breadcrumbs = ({ items }: Props) => {
  return (
    <div className="breadcrumbs">
      {items.map((item, index) => (
        <span key={index} data-testid={`breadcrumb-${index}`}>
          {index > 0 && <Image src={arrow} alt="Arrow" />}
          {index === items.length - 1 ? (
            <span>{item.text}</span>
          ) : (
            <Link href={item.link}>{item.text}</Link>
          )}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;