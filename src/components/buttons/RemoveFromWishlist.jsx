import React from 'react'
import { useDispatch } from 'react-redux';
import {wishlistActions} from '../../store/WishlistSlice';
const RemoveFromWishlist = ({id, toggle}) => {
    const dispatch =useDispatch();
    const removeItem =()=>{
      toggle();
        dispatch(wishlistActions.removeItem(id));

    }
  return (
    <button className='btn btn--sm btn--outline' onClick={removeItem}>
    remove from wishlist
  </button>
  )
}

export default RemoveFromWishlist