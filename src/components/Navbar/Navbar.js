import React from 'react';
import { CartWidget } from '../index';

const Navbar = () => {
  return (
    <div>
        <div className='logo-container'>
        <h1 className="logo">
          <a href="/">Ars Nova</a>
        </h1>
        </div>
        <CartWidget />
    </div>
    
  )
}

export default Navbar;