import React from 'react'
import { cartActions } from '../../store/CartSlice';
import { useDispatch } from 'react-redux';
const AddToCart = ({book}) => {
   
      const dispatch =useDispatch();

  const addToCart =()=>{
    dispatch(cartActions.addItem({
        id:book.id ? book.id :book.isbn13,
        price:book.price,
        image:book.image,
        title:book.title,
   

    }));
  }

  return (
    <button className='btn btn--sm btn--filled' onClick={addToCart}>
            Add to cart
        </button>
  )
}

export default AddToCart