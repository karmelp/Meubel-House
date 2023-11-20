import Link from 'next/link';

import './linkBtn.scss';

type Props = {
    link: string;
    text: string
}

const LinkBtn = (props: Props) => {
  const { link, text } = props;

  return (
    <Link className='linkBtn' href={link}>{text}</Link>
  );
};

export default LinkBtn;