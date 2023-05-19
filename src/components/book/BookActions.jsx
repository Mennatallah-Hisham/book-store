import React from 'react';
import { Link } from 'react-router-dom';

const BookActions = ({id}) => {

  return (
    <div className='btns'>
        <Link className='btn btn--sm btn--outline' to={`/${id}/book`}>


     view
        </Link>
        <button className='btn btn--sm btn--filled'>
            Add to cart
        </button>
    </div>
  )
}

export default BookActions