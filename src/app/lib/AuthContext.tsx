'use client';
import React from 'react';
import { createContext, useState } from 'react';

export const AuthContext = createContext({
  isAuthenticated: false,
  login: () => {},
  logout: () => {}
});

export default function AuthProvider( {children}:{children:React.ReactNode} ) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  function login() {
    setIsAuthenticated(true);
  }

  function logout() {
    setIsAuthenticated(false);
  }

  return <AuthContext.Provider value={{isAuthenticated, login, logout}}> {children} </AuthContext.Provider>;
}