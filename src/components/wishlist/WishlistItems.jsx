import React from 'react'

import WishlistActions from './WishlistActions';
import BookInfo from '../book/BookInfo';

const WishlistItems = ({books}) => {
  console.log(books);
  return (
    
    <section className="container flex-2 m-5">

      {
books.map((book)=>(
<article  className='card' id={book.id}>

<BookInfo book={book} />
<WishlistActions id={book.id}/>
</article>)
)



      }


    </section>
  )
}

export default WishlistItems