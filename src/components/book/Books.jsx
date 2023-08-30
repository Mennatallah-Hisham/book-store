import React from 'react'
import BookCard from './BookCard';
import { useSelector } from 'react-redux';
const Books = () => {

  const books = useSelector(state=>state.books.books);

  if(books.length===0){
    return <p className='txt--sec txt--center'> no books found</p>
  }

  return (
    <section className="container flex-2 m-5">

{books.map((book)=><BookCard
key={book.isbn13}
id={book.isbn13}
 title={book.title} price={book.price} image={book.image} subtitle={book.subtitle} quantity={book.quantity}/>)}
     
      </section>

  )
}

export default Books;