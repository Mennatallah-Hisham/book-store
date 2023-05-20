import React from 'react';

import AddToCart from '../buttons/AddToCart';
import AddToWishlist from "../buttons/AddToWishlist";


const BookActions = ({book}) => {


  return (
    <div className='btns'>
     
        <AddToWishlist book={book}/>
        <AddToCart book={book}/>
     
    </div>
  )
}

export default BookActions