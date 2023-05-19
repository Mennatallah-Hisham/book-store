import React from 'react'
import BookActions from './BookActions';
import BookInfo from './BookInfo';
const BookCard = (props) => {
  return (
  <article className='card'>
   <BookInfo book={props}/>
   <BookActions id={props.id}/>

  

    </article>
  )
}

export default BookCard;