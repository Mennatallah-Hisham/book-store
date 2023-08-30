import React from 'react';

import AddToCart from '../buttons/AddToCart';
import AddToWishlist from "../buttons/AddToWishlist";


const BookActions = ({book}) => {
  console.log(book,"book action")

//  <div "className='btns'">
  return (
  <div>
     
        <AddToWishlist book={book}/>
        <br/>
        <AddToCart book={book}/>
     
    </div>
  )
}

export default BookActions