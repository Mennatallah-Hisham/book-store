import React from 'react'
import RemoveFromWishlist from '../buttons/RemoveFromWishlist'
const WishlistActions = ({id}) => {
  return (
    <div className='btns'>
    <RemoveFromWishlist id={id}/>
    <button className='btn btn--sm btn--filled'>
        move to cart
    </button>
</div>
  )
}

export default WishlistActions