'use client';
import { AuthContext } from '@/app/lib/AuthContext';
import React, { useState, useContext, useEffect } from 'react';
import './billing.scss';
import Link from 'next/link';
import axios from 'axios';
import { Country } from './Country';
import { useCart } from '@/app/lib/CartContext';
import { formatNumber } from '@/app/lib/CartContext';
import CheckoutTable from './checkoutTable';
import BigBtn from './BigBtn';

interface CartItem {
  product: {
    id: number;
    name: string;
    price: number;
  };
  quantity: number;
}
const BillingInfo: React.FC = () => {

  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>('');

  useEffect(() => {
    // Fetch countries data from an API
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      console.log('countries', response.data);
      setCountries(response.data);
    });
  }, []);
  
  const { state: cartState } = useCart();

  function calculateSubtotal(cartItems: CartItem[]): number {
    return cartItems.reduce((subtotal, item) => subtotal + item.product.price * item.quantity, 0);
  }

  const handlePaymentMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPaymentMethod(event.target.id);
  };

  const onSubmit = (data: any) => {
    console.log(data);

    if (selectedPaymentMethod === 'direct-bank-transfer') {
      console.log('You\'ve chosen to pay by direct bank transfer');
    } else if (selectedPaymentMethod === 'cash-on-delivery') {
      console.log('You\'ve chosen to pay with cash on delivery');
    }
  };

  return (
    <div className='billing-info'>
      <div className='billing-details'>
        <h4>Billing Details</h4>
        <form>
          <div className='names'>
            <div className='input-cont'>
              <label htmlFor='firstname'>First Name</label>
              <input id='firstname' type='text' />
            </div>
            <div className='input-cont'>
              <label htmlFor='secondname'>Second Name</label>
              <input id='secondname' type='text' />
            </div>
          </div>
          <div className='input-cont'>
            <label htmlFor='companyname'>Company Name</label>
            <input id='companyname' type='text' />
          </div>
          <div className='input-cont'>
            <label htmlFor='country'>Country</label>
            <select>
              <option value='' disabled selected >Select a country</option>
              {countries.map((country) => (
                <option key={country?.name?.common} value={country?.name?.common}>
                  {country?.name?.common}
                </option>
              ))}
            </select>
          </div>
          <div className='input-cont'>
            <label htmlFor='street'>Street address</label>
            <input id='street' type='text'  />
          </div>
          <div className='input-cont'>
            <label htmlFor='province'>Province</label>
            <input id='province' type='text' placeholder='Province' />
          </div>
          <div className='input-cont'>
            <label htmlFor='zipcode'>Zip code</label>
            <input id='zipcode' type='text'  />
          </div>
          <div className='input-cont'>
            <label htmlFor='phone'>Phone</label>
            <input id='phone' type='text'  />
          </div>
          <div className='input-cont'>
            <label htmlFor='email'>Email address</label>
            <input id='email' type='text'  />
          </div>
          <div className='input-cont'>
            <input id='info' type='text' placeholder='Additional Information' />
          </div>
        </form>
      </div>

      <div className='totals-cont'>
        <div className='headings'>
          <span>Product</span>
          <span>Subtotal</span>
        </div>
        <div>
          <CheckoutTable cartItems={cartState.cartItems} /> 
          <div className='totals'>
            <div className='total'>
              <p>Subtotal</p>
              <p className='subtotal-price'>Rs.{formatNumber(calculateSubtotal(cartState.cartItems))}</p>
            </div>           
            <div className='total'>
              <p>Total</p>
              <span className='total-price'>Rs.{formatNumber(calculateSubtotal(cartState.cartItems))}</span>
            </div>           
          </div>
          <div className="divider"></div>

          <div className="payment-methods">
            <div className='radio'>
              <input
                id='direct-bank-transfer'
                type='radio'
                name='payment-method'
                checked={selectedPaymentMethod === 'direct-bank-transfer'}
                onChange={handlePaymentMethodChange}
              />
              <label htmlFor='direct-bank-transfer' className={selectedPaymentMethod === 'direct-bank-transfer' ? 'active' : ''}>
                Direct Bank transfer
              </label>
            </div>
            {selectedPaymentMethod === 'direct-bank-transfer' && (
              <p className='method-explanation'>
                Make your payments directly into our bank accounts. Please use your Order Id as the
                payment reference. Your Order will not be shipped until the funds have cleared in our
                account.
              </p>
            )}
            <div className='radio'>
              <input
                id='credit-card'
                type='radio'
                name='payment-method'
                checked={selectedPaymentMethod === 'credit-card'}
                onChange={handlePaymentMethodChange}
              />
              <label htmlFor='credit-card' className={selectedPaymentMethod === 'credit-card' ? 'active' : ''}>
                Credit Card
              </label>
            </div>
            <div className='radio'>
              <input
                id='cash-on-delivery'
                type='radio'
                name='payment-method'
                checked={selectedPaymentMethod === 'cash-on-delivery'}
                onChange={handlePaymentMethodChange}
              />
              <label htmlFor='cash-on-delivery' className={selectedPaymentMethod === 'cash-on-delivery' ? 'active' : ''}>
                Cash On Delivery
              </label>
            </div>
          </div>
          <p className='privacy'>
            Your personal data will be used to support your experience throughout this website, to
            manage access to your account, and for other purposes described in our{' '}
            <Link href='/privacy-policy'>privacy policy</Link>.
          </p>
          <div className="place-order">
            <Link href="#" onClick={onSubmit}>
              <BigBtn title="Place Order" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingInfo;
