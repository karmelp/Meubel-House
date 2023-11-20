import React from 'react';
import './checkoutTable.scss';
import { formatNumber } from '@/app/lib/CartContext';

interface CartItem {
  product: {
    id: string;
    name: string;
    price: number;
    gallery: string;
  };
  quantity: number;
}

interface CartTableProps {
  cartItems: CartItem[];
}

const CheckoutTable: React.FC<CartTableProps> = ({ cartItems }) => {
 
  return (
    <div className='checkout-table'>
      {cartItems.map((cartItem) => (
        <div className='product-details' key={cartItem.product.id}>
          <div className="product">
            <span>{cartItem.product.name}</span> x {cartItem.quantity}
          </div>              
          <div className='product-price'>Rs.{formatNumber(cartItem.product.price * cartItem.quantity)}</div>            
        </div>
      ))}
    </div>
  );
};

export default  CheckoutTable;
