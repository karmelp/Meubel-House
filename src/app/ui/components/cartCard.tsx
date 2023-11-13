import React from 'react';
import "./cartCard.scss";
import Image from 'next/image';
import { formatNumber } from '@/app/lib/CartContext';
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
      <Image src={require(`@/public/${imageSrc}`).default} alt="Product" className="cart-item-image" />
      <div className="cart-item-details">
        <h3 className="product-name">{productName}</h3>
        <div className="cart-item-info">
          <span className="quantity"> {quantity}</span>
          <span className="quantity">X</span>
          <span className="amount">Rs. {formatNumber(amount)}</span>
        </div>
      </div>
      <button className="close-button" onClick={onCloseClick}>
        Remove
      </button>
    </div>
  );
};

export default CartItemCard;
