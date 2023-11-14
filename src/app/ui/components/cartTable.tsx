import React from 'react';
import './cartTable.scss';
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

const CartTable: React.FC<CartTableProps> = ({ cartItems }) => {
  const { state: cartState, removeFromCart } = useCart();
 
  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>          
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((cartItem) => (
          <tr key={cartItem.product.id}>
            <td className='img_card'>
              <Image 
                src={require(`@/public/${cartItem.product.gallery?.[0]}`).default}
                // src={cartItem.product.image}
                alt={cartItem.product.name}
              />
              {cartItem.product.name}
            </td>
            <td className='price'>Rs .{formatNumber(cartItem.product.price)}</td>
            <td>{cartItem.quantity}</td>
            <td>Rs.{cartItem.product.price * cartItem.quantity}</td>
            <td>
              <button onClick={() => removeFromCart(cartItem.product.id)} className="delete-button">
                <FontAwesomeIcon icon={faTrash} className="delete-button"/>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CartTable;
