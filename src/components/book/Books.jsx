import React from 'react'
import BookCard from './BookCard';
const Books = ({books}) => {

  return (
    <section className="container flex-2 m-5">
{books.map((book)=><BookCard
id={book.isbn13}
 title={book.title} price={book.price} image={book.image} subtitle={book.subtitle}/>)}
     
      </section>

  )
}

export default Books;