import React from 'react';
import './Navbar.css';
import NavLogo from '../../Images/cycle-favicon.png';
import ProfileImg from '../../Images/pngwing.com.png';


export default function Navbar() {
  return (
    <>
    <div className="sub-header">
        <div className="login-links">
            <a href="components/signIn/signIn.html">Sign In</a> |
            <a href="components/signUp/signUp.html">Sign Up</a>
        </div>
    </div>
    <nav className="navbar">
        <div className="nav-brand">
            <a href="components/cycles/cycles.html" className="nav-brand-name">Faster Cycle Store</a>
            <a href="index.html"><img src={NavLogo} alt="brand-img" className="nav-brand-img" /></a>
        </div>
       <div className="nav-contents">
        <div className="search-bar">
            <input type="text" placeholder="Search" className="search-input"/>
        </div>

        <div className="wishlist">
            <a href="/components/wishlist/wishlist.html" className="nav-wishlist-icon" title="WishList"><i className="lni lni-heart"></i></a>
            <span className="wishlist-items-number">4</span>
        </div>

        <div className="cart">
            <a href="components/cart/cart.html" className="cart-icon" title="Cart"><i className="lni lni-cart-full"></i></a>
            <span className="cart-items-number">3</span>
        </div>

        <div className="user-profile">
            <a href="components/profile/profile.html"  title="User-Profile"><img className="user-profile-icon" src={ProfileImg} alt="user-profile"/></a>
        </div>
       </div>
    </nav>
    </>
  )
}
