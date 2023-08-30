import React from 'react'
import { useState,useEffect } from 'react';
import BookCard from "../components/book/BookCard"

import Header from '../components/layout/Header';
import SearchBar from '../components/search/SearchBar';

import { getBooks } from '../utility/FetchApi';
const Search = () => {
  const [searchTerm , setSearchTerm]=useState("web development");
  const [books, setBooks]=useState([]);

  const getSearchTerm= (term)=>{

    setSearchTerm(term);

  }

  useEffect(()=>{
    getBooks(`https://api.itbook.store/1.0/search/${searchTerm}`).then((data)=>setBooks(data.books));

  },[searchTerm]);
  console.log(books)
  return (
    <React.Fragment>
    <Header title="search" body="All Books In One Place"/>

      <SearchBar onSearch={getSearchTerm}/>
  
 {books===undefined ? <p> search for you new book </p> :  
    ( <section className="container flex-2 m-5">

     {books.map((book)=><BookCard
     key={book.isbn13}
     id={book.isbn13}
      title={book.title} price={book.price} image={book.image} subtitle={book.subtitle} quantity={book.quantity}/>)}
          
           </section>)
 
  }
 
   
      


</React.Fragment>
  )
}

export default Search;