import React from 'react';
import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <nav className='flex-2'>
    <ul className='flex-2'>
        <li>
            <Link to="/">Home</Link>
            
        </li>
        <li>
            <Link to="/shop">shop</Link>

        </li>
        <li>
            <Link to="/contact">contact us</Link>

        </li>
    </ul>
    <ul className='flex-2'>
        <li>
            <Link to="/search">search</Link>
            
        </li>
        <li>
            <Link to="/book">view book</Link>
            
        </li>
        <li>
            <Link to="/wishlist">wishlist</Link>
            
        </li>
        <li>
            <Link to="/cart">cart</Link>
            
        </li>
      
    </ul>
</nav>
  );
}

export default Nav;