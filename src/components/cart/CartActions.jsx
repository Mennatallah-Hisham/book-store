import React from 'react'

const CartActions = () => {
  return (
    <div>

<div className='btns'>
<button className='btn btn--sm btn--sec'>-</button>
<button className='btn btn--sm btn--sec'>+</button>
</div>

        <button className='btn btn--sm btn--filled '> remove</button>
        <button className='btn btn--sm btn--outline '> move to wishlist</button>
    </div>
  )
}

export default CartActions