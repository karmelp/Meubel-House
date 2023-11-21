import Image from 'next/image';

import { formatNumber } from '@/app/lib/CartContext';
import { useCart } from '@/app/lib/CartContext';

import Delete from '@/public/ant-design_delete-filled.svg';

import './cartTable.scss';

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
                src={require(`@/public/${cartItem.product.gallery?.[0]}`)}
                alt={cartItem.product.name}
              />
              <p>{cartItem.product.name}</p>
            </td>
            <td><p className='price'>Rs .{formatNumber(cartItem.product.price)}</p></td>
            <td><p className='quantity'>{cartItem.quantity}</p></td>
            <td className='subtotal'>Rs. {formatNumber(cartItem.product.price * cartItem.quantity)}</td>
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