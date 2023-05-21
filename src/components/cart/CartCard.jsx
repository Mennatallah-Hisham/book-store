import React from 'react'
import CartActions from './CartActions'

const CartCard = ({book}) => {
  console.log(book);
  return (
 <article className='flex'>


<img src={book.image} width="200px"/>
    <p className='txt--sec'> {book.title}</p>
    <p className='txt--pri'> {book.price}</p>
   


    <CartActions book={book} />

 </article>
  )
}

export default CartCard;