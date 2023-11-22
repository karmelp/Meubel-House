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
    <div className="cart-table">
      <table>
        <thead>
          <tr>
            <th>Product</th>          
            <th style={{ textAlign: 'start'}}>Price</th>
            <th>Quantity</th>
            <th style={{ textAlign: 'start'}}>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((cartItem) => (
            <tr key={cartItem.product.id}>
              <td>
                <div className="img_card margin">
                  <Image 
                    src={require(`@/public/${cartItem.product.gallery?.[0]}`)}
                    alt={cartItem.product.name}
                  />
                  <p>{cartItem.product.name}</p>
                </div>
              </td>
              <td><p className='price margin'>Rs. {formatNumber(cartItem.product.price)}</p></td>
              <td><p className='quantity margin'>{cartItem.quantity}</p></td>
              <td><p className='margin'>Rs. {formatNumber(cartItem.product.price * cartItem.quantity)}</p></td>
              <td>
                <button onClick={() => removeFromCart(cartItem.product.id)} className="delete-button margin">
                  <Image src={Delete} alt='Delete' />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="mobile-view">
        {cartItems.map((cartItem) => (
          <div className='product' key={cartItem.product.id}>
            <div className='img_card'>
              <Image 
                src={require(`@/public/${cartItem.product.gallery?.[0]}`)}
                alt={cartItem.product.name}
              />
              <div className="details">
                <p className='name'>{cartItem.product.name}</p>
                <div className='total'>
                  <p className='amount'>{cartItem.quantity} x</p>
                  <p>Rs. {formatNumber(cartItem.product.price)}</p>
                </div>
              </div> 
            </div>
            <Image className='remove' onClick={() => removeFromCart(cartItem.product.id)} src={Delete} alt='Delete' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartTable;