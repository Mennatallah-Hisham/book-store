import React from 'react';
import { Link } from 'react-router-dom';
const KeepShopping = ({title}) => {
  return (
    <section className='container m-5'>
    <p className='txt--sec'>{title}</p>
    <Link to="/" className='btn btn--filled m-5'> keep shopping</Link>
  </section>
  

  )
}

export default KeepShopping;