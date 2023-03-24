import React from 'react'
import BookActions from './BookActions';
import BookInfo from './BookInfo';
const BookCard = () => {
  return (
  <article className='card'>
   <BookInfo/>
   <BookActions/>

  

    </article>
  )
}

export default BookCard;