import React from 'react'
import CartActions from './CartActions'

const CartCard = ({book}) => {

  return (
 <article className='flex'>


<img src={book.image} width="200px"/>
  


    <CartActions book={book} />

 </article>
  )
}

export default CartCard;