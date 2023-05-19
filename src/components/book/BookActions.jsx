import React from 'react';
import { Link } from 'react-router-dom';
import AddToCart from '../buttons/AddToCart';


const BookActions = ({book}) => {


  return (
    <div className='btns'>
        <Link className='btn btn--sm btn--outline' to={`/${book.id}/book`}>


     view
        </Link>
        <AddToCart book={book}/>
     
    </div>
  )
}

export default BookActions