'use client';
import React, { createContext, useContext, useState } from 'react';
import { login, logout } from '@/app/services/AuthServices';

interface AuthContextProps {
  isAuthenticated: boolean;
  authenticate: (email: string, password: string) => void;
  signout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  authenticate: () => {},
  signout: () => {},
});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('accessToken') ? true : false
  );

  const authenticate = async (email: string, password: string) => {
    try {
      const response = await login(email, password);
      localStorage.setItem('accessToken', response['access_token']);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Authentication Error: ', error);
    }
  };

  const signout = async () => {
    try {
      await logout();
      localStorage.removeItem('accessToken');
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Sign Out Error: ', error);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, authenticate, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => useContext(AuthContext);
