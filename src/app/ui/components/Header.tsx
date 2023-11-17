'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './header.scss';
import { useCart } from '@/app/lib/CartContext';
import UserAccount from '@/public/mdi_account-alert-outline.svg';
import Search from '@/public/akar-icons_search.svg';
import Favourites from '@/public/akar-icons_heart.svg';
import ShoppingCart from '@/public/ant-design_shopping-cart-outlined.svg';
import CartSidebar from './CartSidebar';
type Props = {}

const Header = (props: Props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { state: cartState,setIsOpen } = useCart();

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
    setIsOpen(false);
  };
  const openCart = () => {
    setIsCartOpen(true);
    setIsOpen(true);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = () => {
    closeMenu();
  };

  const handleOverlayClick = () => {
    closeMenu();
    closeCart();
  };

  return (
    <header>
      <div className='section'></div>
      <button className='burger-menu' onClick={toggleMenu}>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </button>
      <nav className={`section ${showMenu ? 'show-menu' : ''}`}>
        <Link href="/" onClick={handleLinkClick}>Home</Link>
        <Link href="/shop" onClick={handleLinkClick}>Shop</Link>
        <Link href="/about" onClick={handleLinkClick}>About</Link>
        <Link href="/contact" onClick={handleLinkClick}>Contact</Link>
      </nav>
      <div className='icons section'>
        <Link href="/my-account"><Image src={UserAccount} width={28} height={28} alt="My Account" /></Link>
        <Link href="#"><Image src={Search} width={28} height={28} alt="Search" /></Link>
        <Link href="#" className='favs'><Image src={Favourites} width={28} height={28} alt="Favourites" /></Link>
        <Link href="#" onClick={openCart}><Image src={ShoppingCart} width={28} height={28} alt="Cart" /></Link>
      </div>
      <CartSidebar isOpen={isCartOpen} closeCart={closeCart} />
      <div
        className={`overlay ${isCartOpen || cartState.isOpen || showMenu ? 'active' : ''}`}
        onClick={handleOverlayClick}
      ></div>
    </header>
  );
};
// 
export default Header;