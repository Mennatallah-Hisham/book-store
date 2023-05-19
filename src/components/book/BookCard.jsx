import React from 'react'
import BookActions from './BookActions';
import BookInfo from './BookInfo';
const BookCard = (props) => {
  return (
  <article className='card'>
   <BookInfo book={props}/>
   <BookActions book={props}/>

  

    </article>
  )
}

export default BookCard;