import React from 'react';
import Link from 'next/link';
import './roundLinkBtn.scss';

type Props = {
    link: string;
    text: string
}

const RoundLinkBtn = (props: Props) => {
  const { link, text } = props;

  return (
    <Link href={link}>
      <button className='roundLinkBtn'>{text}</button>
    </Link>
  );
};

export default RoundLinkBtn;