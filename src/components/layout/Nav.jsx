import React from 'react';
import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <nav>
    <ul>
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
    <ul>
        <li>
            <Link to="/search">search</Link>
            
        </li>
      
    </ul>
</nav>
  );
}

export default Nav;