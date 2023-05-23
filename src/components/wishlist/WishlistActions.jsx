import React from 'react'
import { wishlistActions } from '../../store/WishlistSlice';
import { cartActions } from '../../store/CartSlice';
import { useDispatch } from 'react-redux';
const WishlistActions = ({book}) => {

  const dispatch =useDispatch();
    const removeItem =()=>{
        dispatch(wishlistActions.removeItem(book.id));

    }
    const moveToCart=()=>{
      removeItem();
      dispatch(cartActions.addItem({
        id:book.id ? book.id :book.isbn13,
        price:book.price,
        image:book.image,
        title:book.title,
      

    }));
  }
  return (
    <div className='flex-col--sm'>
          <button className='btn btn--sm btn--filled' onClick={moveToCart}>
        move to cart
    </button>

    <button className='btn btn--sm btn--outline mt-1' onClick={removeItem}>
    remove from wishlist
  </button>


</div>
  )
}

export default WishlistActions