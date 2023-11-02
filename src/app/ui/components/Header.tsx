"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';
import './header.scss'
import UserAccount from '@/public/mdi_account-alert-outline.svg';
import Search from '@/public/akar-icons_search.svg';
import Favourites from '@/public/akar-icons_heart.svg';
import ShoppingCart from '@/public/ant-design_shopping-cart-outlined.svg';

type Props = {}

const Header = (props: Props) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
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
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <div className='icons section'>
        <Link href="/my-account"><Image src={UserAccount} width={28} height={28} alt="My Account" /></Link>
        <Link href="#"><Image src={Search} width={28} height={28} alt="Search" /></Link>
        <Link href="#"><Image src={Favourites} width={28} height={28} alt="Favourites" /></Link>
        <Link href="#"><Image src={ShoppingCart} width={28} height={28} alt="Cart" /></Link>
      </div>
    </header>
  )
}

export default Header