import React from 'react';
import './cartCard.scss';
import Image from 'next/image';
import Link from 'next/link';
import { formatNumber } from '@/app/lib/CartContext';
import Remove from '@/public/deleteItem.svg';

interface CartItemCardProps {
  imageSrc: string;
  productName: string;
  quantity: number;
  amount: number;
  onCloseClick: () => void;
}

const CartItemCard: React.FC<CartItemCardProps> = ({
  imageSrc,
  productName,
  quantity,
  amount,
  onCloseClick,
}) => {
  return (
    <div className="cart-item-card">
      <Image src={require(`@/public/${imageSrc}`)} alt="Product" className="cart-item-image" />
      <div className="cart-item-details">
        <p>{productName}</p>
        <div className="cart-item-info">
          <p className="quantity"> {quantity}</p>
          <p className="quantity">X</p>
          <span className="amount">Rs. {formatNumber(amount)}</span>
        </div>
      </div>
      <Link href="#" className="close-button" onClick={onCloseClick}>
        <Image src={Remove} alt='Remove item' />
      </Link>
    </div>
  );
};

export default CartItemCard;
