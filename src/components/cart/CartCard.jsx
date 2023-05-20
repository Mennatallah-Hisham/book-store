import React from 'react'
import CartActions from './CartActions'

const CartCard = ({book}) => {
  console.log(book);
  return (
 <article className='flex'>

<img src={book.image} width="120px"/>
<div>
    <p className='txt--sec'> {book.title}</p>
    <p className='clr-sec'> {book.totalPrice}</p>
</div>
<p className='txt--sec'>{book.quantity}</p>
    <CartActions book={book}/>

 </article>
  )
}

export default CartCard;