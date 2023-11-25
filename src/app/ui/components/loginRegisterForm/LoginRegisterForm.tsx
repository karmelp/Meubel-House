'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { NextRouter, useRouter } from 'next/router';

import { useAuth } from '@/app/lib/AuthContext';

import BigBtn from '../bigBtn/BigBtn';

import './loginRegisterForm.scss';

interface LoginRegisterFormsProps {
  router: NextRouter;
}

const LoginRegisterForms: React.FC<LoginRegisterFormsProps> = () => {
  const router = useRouter();
  const [formState, setFormState] = useState({
    email: '',
    password: ''
  });
  const { authenticate, isAuthenticated } = useAuth();
  const [rememberMe, setRememberMe] = useState(false);
  const [usernameTouched, setUsernameTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [activeForm, setActiveForm] = useState<'login' | 'register'>('login');

  const handleSwitchForm = (event: React.MouseEvent<HTMLElement>, targetForm: 'login' | 'register') => {
    event.preventDefault();
    setError(null);
    setActiveForm(targetForm);
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setUsernameTouched(true);
    setPasswordTouched(true);

    if (!formState.email || !formState.password) {
      return;
    }

    authenticate(formState.email, formState.password);
  };

  // Clear the error message when the user starts typing
  const handleInputChange = (field: 'username' | 'password') => {
    setError(null);

    // Set the corresponding "touched" state to true
    if (field === 'username') {
      setUsernameTouched(true);
    } else if (field === 'password') {
      setPasswordTouched(true);
    }
  };

  const handleLoginClick = () => {
    // Call the handleSubmit function without passing any arguments
    handleFormSubmit({
      preventDefault: () => {},
    } as React.FormEvent<HTMLFormElement>);
  };

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/my-account');
    }
  }, [isAuthenticated, router]);

  return (
    <div className="loginRegisterForms-components">
      <div className={`form-container ${activeForm === 'login' ? 'active' : 'inactive'}`} id="login">
        <h4>Login</h4>
        <form onSubmit={handleFormSubmit}>
          <div className="input-cont">
            <label htmlFor="username">Username or email address</label>
            <input
              id='username'
              type="text"
              value='username'
              onChange={(e) => {
                handleInputChange('username');
                setFormState({ ...formState, email: e.target.value });
              }}
              required
            />
            {usernameTouched && !formState.email && <p className="error">Username is required</p>}
          </div>

          <div className="input-cont">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value='password'
              onChange={(e) => {
                handleInputChange('password');
                setFormState({ ...formState, password: e.target.value });
              }}
              required
            />
            {passwordTouched && !formState.password && <p className="error">Password is required</p>}
          </div>
          <div className="checkbox">
            <input 
              id="remember-me"
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)} 
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <div className="btns">
            <BigBtn onClick={handleLoginClick} title="Login" />
            <Link href="#">Lost Your Password?</Link>
          </div>
          <Link href='#' className='switch' onClick={(e) => handleSwitchForm(e, 'register')}>
                Not a user? Click here to register!
          </Link>
        </form>
      </div>
      <div className={`form-container ${activeForm === 'register' ? 'active' : 'inactive'}`} id="register">
        <h4>Register</h4>
        <form>
          <div className="input-cont">
            <label htmlFor="email">Email address</label>
            <input
              id='email'
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <p>A link to set a new password will be sent to your email address.</p>
          <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <Link href="/privacy-policy">privacy policy</Link>.</p>
          <BigBtn title="Register" />
          <Link href='#' className='switch' onClick={(e) => handleSwitchForm(e, 'login')}>
              Already a user? Click here to log in!
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginRegisterForms;
