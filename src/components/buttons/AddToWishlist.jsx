
import React from 'react'
import {wishlistActions} from "../../store/WishlistSlice";
import { useDispatch } from 'react-redux';
const AddToWishlist = ({book}) => {
 
      const dispatch =useDispatch();

  const addToCart =()=>{
    dispatch(wishlistActions.addItem({
        id:book.id ? book.id :book.isbn13,
        price:book.price,
        image:book.image,
        title:book.title

    }));
  }
  return (
    <button className='btn btn--sm btn--outline' onClick={addToCart}>
            Add to wishlist
        </button>
  )
}

export default AddToWishlist