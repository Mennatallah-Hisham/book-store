import React from 'react'

import WishlistActions from './WishlistActions';
import BookCard from '../book/BookCard';

const WishlistItems = ({books}) => {
 
  return (
    
    <section className="container flex-2 m-5">

      {
books.map((book)=>(
<article  className='card'
 key={book.id}>


<BookCard
 key={book.id}
id={book.id}
 title={book.title} price={book.price} image={book.image} subtitle={book.subtitle} quantity={book.quantity}/>
<WishlistActions book={book}/>
</article>)
)



      }


    </section>
  )
}

export default WishlistItems