import React from 'react'

import WishlistActions from './WishlistActions';
import BookInfo from '../book/BookInfo';

const WishlistItems = ({books}) => {
 
  return (
    
    <section className="container flex-2 m-5">

      {
books.map((book)=>(
<article  className='card'
 key={book.id}>

<BookInfo book={book} />
<WishlistActions book={book}/>
</article>)
)



      }


    </section>
  )
}

export default WishlistItems