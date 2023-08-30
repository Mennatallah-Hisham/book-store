import React from 'react'
import { cartActions } from '../../store/CartSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';


const AddToCart = ({book}) => {

  const [quantity, setQuantity]=useState(0);

   
      const dispatch =useDispatch();

  const addToCart =()=>{

    dispatch(cartActions.addItem({
        id:book.id ? book.id :book.isbn13,
        price:book.price,
        image:book.image,
        title:book.title,
   

    }));

    setQuantity(prev => prev+1 );
  }


  return (
    <>
 <div className='btns'>
  <p>{quantity}</p>
 <button className='btn btn--sm btn--filled' onClick={addToCart}>
            Add to cart
        </button>

 </div>


    </>
   
  )
}

export default AddToCart