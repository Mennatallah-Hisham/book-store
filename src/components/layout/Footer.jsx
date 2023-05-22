import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
  <footer className="footer mt-3">
    <div className="container">
      <div className="footer__cont">
      <p className='logo'>
      Books’n’Things

    </p>
    <Link
  
     to="/contact"
     className='btn btn--sm btn--filled' >contact us</Link>
   
      </div>
      <div className="m-1">
      <hr></hr>
      </div>
      <div className="footer__cont">
    <p className='footer__txt mt-1'> 2023 all rights reserved</p>
    <p className='footer__txt mt-1'>developed by Mennatallah Hesham</p>
   </div>

    </div>
    
  
    </footer>
  )
}

export default Footer