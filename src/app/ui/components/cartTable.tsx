import React from 'react';
import './cartTable.scss';
import Image from 'next/image';
import { formatNumber } from '@/app/lib/CartContext';
import { useCart } from '@/app/lib/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Delete from '@/public/ant-design_delete-filled.svg';
import { Link } from 'react-router-dom';

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
          <th className='product-column'>Product</th>          
          <th className='price'>Price</th>
          <th className='quantity'>Quantity</th>
          <th className='subtotal'>Subtotal</th>
          <th className='delete'></th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((cartItem) => (
          <tr className='product-row' key={cartItem.product.id}>
            <td>
              <div className='product-column img_card'>
                <Image 
                  src={require(`@/public/${cartItem.product.gallery?.[0]}`)}
                  alt={cartItem.product.name}
                />
                <p>{cartItem.product.name}</p>
              </div>
            </td>
            <td><p className='price'>Rs .{formatNumber(cartItem.product.price)}</p></td>
            <td><p className='quantity'>{cartItem.quantity}</p></td>
            <td><p>Rs.{cartItem.product.price * cartItem.quantity}</p></td>
            <td>
              <button onClick={() => removeFromCart(cartItem.product.id)} className="delete-button">
                <Image src={Delete} alt='Delete' />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CartTable;