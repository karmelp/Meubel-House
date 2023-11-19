import React from 'react';
import './bigBtn.scss';

type Props = {
  title: string;
  onClick?: () => void;
}

const BigBtn: React.FC<Props> = ({ title, onClick }) => {
  return (
    <button className='bigBtn' onClick={onClick}>{title}</button>
  );
};

export default BigBtn;