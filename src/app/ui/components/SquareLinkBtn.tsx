import React from 'react';
import Link from 'next/link';
import './squareLinkBtn.scss';

type Props = {
    link: string;
    text: string
}

const SquareLinkBtn = (props: Props) => {
  const { link, text } = props;

  return (
    <Link href={link}>
      <button className='squareLinkBtn'>{text}</button>
    </Link>
  );
};

export default SquareLinkBtn;