import React from 'react';
import { Link } from 'react-router-dom';
import { cartActions } from '../../store/CartSlice';
import { useDispatch } from 'react-redux';

const BookActions = ({id}) => {
  const dispatch =useDispatch();

  const addToCart =()=>{
    dispatch(cartActions.addToCart());
  }

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