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
interface CartItem {
  product: {
    id: number;
    name: string;
    price: number;
    // Add other properties as needed
  };
  quantity: number;
  // Add other properties as needed
}
const BillingInfo: React.FC = () => {
  const context = useContext(AuthContext);

  const [activeForm, setActiveForm] = useState<string>('login');
  // const [error, setError] = useState<null | string>(null);

  const handleSwitchForm = (
    event: React.MouseEvent<HTMLElement>,
    targetForm: 'login' | 'register',
  ) => {
    event.preventDefault();
    // setError(null);
    setActiveForm(targetForm);
  };
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    // Fetch countries data from an API
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      console.log('countries', response.data);
      setCountries(response.data);
    });
  }, []);
  const { state: cartState, removeFromCart } = useCart();
  // console.log("cart state",cartState)
  function calculateSubtotal(cartItems: CartItem[]): number {
    return cartItems.reduce((subtotal, item) => subtotal + item.product.price * item.quantity, 0);
  }
  const breadcrumbs = [
    { text: 'Home', link: '/' },
    { text: 'Checkout', link: '/checkout' },
  ];
  const onSubmit = (data: any) => {
    console.log(data); // Handle form submission logic here
  };

  return (
    <div className='loginRegisterForms-components'>
      <div className={'form-container'} id='login'>
        <h4>Billing Details</h4>
        <form>
          <div className='names'>
            <div className='input-cont'>
              <label htmlFor='firstname'>First Name</label>
              <input id='firstname' type='text'  />
            </div>
            <div className='input-cont'>
              <label htmlFor='secondname'>Second Name</label>
              <input id='secondname' type='text'  />
            </div>
          </div>
          <div className='input-cont'>
            <label htmlFor='companyname'>Company Name</label>
            <input id='companyname' type='text'  />
          </div>

          <div className='input-cont'>
            <label htmlFor='country'>Country</label>
            {/* <input
              type="password"
              id="password"
            /> */}
            <select>
              <option value=''>Select a country</option>
              {countries.map((country) => (
                <option key={country?.name?.common} value={country?.name?.common}>
                  {country?.name?.common}
                </option>
              ))}
            </select>
          </div>
          {/* <div className="checkbox">
            <input id="remember-me" type="checkbox" />
            <label htmlFor="remember-me">Remember me</label>
          </div> */}
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
      <div className={'form-container '} id='register'>
        <div className='heading'>
          <h5 className='title_table'>Product</h5>
          <h5 className='title_table'>Subtotal</h5>
        </div>
        <form>
          <CheckoutTable cartItems={cartState.cartItems} /> 
          <div className='totals'>
            <div className='subtotal'>
              <div>Subtotal </div>
              <div>Rs.{formatNumber(calculateSubtotal(cartState.cartItems))}</div>
            </div>           
            <div className='subtotal'>
              <div>Total </div>
              <div>
                <div className='price'>Rs.{formatNumber(calculateSubtotal(cartState.cartItems))}</div></div>
            </div>           
          </div>
          <h6 className='title_table2'>Direct Bank Transfer</h6>
          <p className='text'>
            Make your payments directly into our bank accounts. Please use your Order Id as the
            payment refrence.Your Order will not be shipped until the funds have cleared in our
            account
          </p>
          <div className='checkbox'>
  <input id='direct-bank-transfer' type='radio' name='payment-method' />
  <label htmlFor='direct-bank-transfer'>Direct Bank transfer</label>
</div>
<div className='checkbox'>
  <input id='cash-on-delivery' type='radio' name='payment-method' />
  <label htmlFor='cash-on-delivery'>Cash on delivery</label>
</div>
          <p>
            Your personal data will be used to support your experience throughout this website, to
            manage access to your account, and for other purposes described in our{' '}
            <Link href='/privacy-policies'>privacy policy</Link>.
          </p>
          <div className='order-button'>
            <button type='submit' onClick={onSubmit}>
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BillingInfo;
