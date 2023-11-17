import React from 'react';
import './checkoutTable.scss';
import Image from 'next/image';
import { formatNumber } from '@/app/lib/CartContext';
import { useCart } from '@/app/lib/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface CartItem {
  product: {
    id: string;
    name: string;
    price: number;
    gallery: string; // Add image property
  };
  quantity: number;
}

interface CartTableProps {
  cartItems: CartItem[];
}
function calculateSubtotal(cartItems: CartItem[]): number {
  return cartItems.reduce((subtotal, item) => subtotal + item.product.price * item.quantity, 0);
}

const CheckoutTable: React.FC<CartTableProps> = ({ cartItems }) => {
  const { state: cartState, removeFromCart } = useCart();
 
  return (
    <div className='checkout-table'>
    <table >      
      <tbody>
        {cartItems.map((cartItem) => (
          <tr key={cartItem.product.id}>
            <td className=''>              
              {cartItem.product.name}{" "}
              x {cartItem.quantity}
            </td>         
            <td>Rs.{formatNumber(cartItem.product.price * cartItem.quantity)}</td>            
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default  CheckoutTable;
