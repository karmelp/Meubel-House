'use client';
import { useState, useContext } from 'react';
import Link from 'next/link';
import { NextRouter } from 'next/router';

import { AuthContext } from '@/app/lib/AuthContext';

import BigBtn from '../bigBtn/BigBtn';

import './loginRegisterForm.scss';

interface LoginRegisterFormsProps {
  router: NextRouter;
}

const LoginRegisterForms: React.FC<LoginRegisterFormsProps> = ({ router }) => {
  const { login } = useContext(AuthContext);
  const [rememberMe, setRememberMe] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setUsernameTouched(true);
    setPasswordTouched(true);

    if (!username) {
      return;
    }

    if (!password) {
      return;
    }

    try {
      // Mock response for demonstration purposes
      const res = {
        data: { jwt: 'asdasdfdasfadf', refreshToken: 'adfasdfasdfasdfadsf' }
      };

      const { jwt } = res.data;

      login();

      console.log('Remember Me:', rememberMe);

      router.push('/my-account');
    } catch (err) {
      setError('Incorrect username or password');
    }
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
    handleSubmit({
      preventDefault: () => {},
    } as React.FormEvent<HTMLFormElement>);
  };

  return (
    <div className="loginRegisterForms-components">
      <div className={`form-container ${activeForm === 'login' ? 'active' : 'inactive'}`} id="login">
        <h4>Login</h4>
        <form onSubmit={handleSubmit}>
          <div className="input-cont">
            <label htmlFor="username">Username or email address</label>
            <input
              id='username'
              type="text"
              value={username}
              onChange={(event) => {
                handleInputChange('username');
                setUsername(event.target.value);
              }}
              required
            />
            {usernameTouched && !username && <p className="error">Username is required</p>}
          </div>

          <div className="input-cont">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => {
                handleInputChange('password');
                setPassword(event.target.value);
              }}
              required
            />
            {passwordTouched && !password && <p className="error">Password is required</p>}
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
