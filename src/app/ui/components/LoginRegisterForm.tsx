"use client"
import { AuthContext } from '@/app/lib/AuthContext';
import React, { useState, useContext } from 'react';
import './loginRegisterForm.scss'
import Link from 'next/link';

const LoginRegisterForms: React.FC = () => {
  const context = useContext(AuthContext)

  const [activeForm, setActiveForm] = useState<string>('login');
  // const [error, setError] = useState<null | string>(null);

  const handleSwitchForm = (event: React.MouseEvent<HTMLElement>, targetForm: 'login' | 'register') => {
    event.preventDefault();
    // setError(null);
    setActiveForm(targetForm);
  };

  return (
    <div className="loginRegisterForms-components">
      <div className={`form-container ${activeForm === 'login' ? 'active' : 'inactive'}`} id="login">
        <h4>Login</h4>
        <form>
          <div className="input-cont">
            <label htmlFor="username">Username or email address</label>
            <input
              id="username"
              type="text"
            />
          </div>

          <div className="input-cont">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
            />
          </div>
          <div className="checkbox">
            <input id="remember-me" type="checkbox" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <div className="btns">
            <button onClick={context.login}>Login</button>
            <Link href="#">Lost Your Password?</Link>
          </div>
          <span className='switch' onClick={(e) => handleSwitchForm(e, 'register')}>
            Not a user? Click here to register!
          </span>
        </form>
      </div>
      <div className={`form-container ${activeForm === 'register' ? 'active' : 'inactive'}`} id="register">
        <h4>Register</h4>
        <form>
          <div className="input-cont">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
            />
          </div>
          <p>A link to set a new password will be sent to your email address.</p>
          <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <Link href="/privacy-policies">privacy policy</Link>.</p>
          <button type="submit">Register</button>
          <span className='switch' onClick={(e) => handleSwitchForm(e, 'login')}>
            Already a user? Click here to log in!
          </span>
        </form>
      </div>
    </div>
  );
};

export default LoginRegisterForms;
