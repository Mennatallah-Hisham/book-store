import React from 'react'
import CartActions from './CartActions'

const CartCard = () => {
  return (
 <article className='flex'>

<img src="./book.jpg" width="120px"/>
<div>
    <p className='txt--sec'> title</p>
    <p className='clr-sec'> 65</p>
</div>
<p className='txt--sec'>1</p>
    <CartActions/>

 </article>
  )
}

export default CartCard;