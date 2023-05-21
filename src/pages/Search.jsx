import React from 'react'
import { useState,useEffect } from 'react';
import Books from '../components/book/Books';

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
  return (
    <React.Fragment>
    <Header title="search" body="All Books In One Place"/>

      <SearchBar onSearch={getSearchTerm}/>
  
 {books===undefined ? <p> search for you new book </p> :  <Books books={books}/>   }
 
   
      


</React.Fragment>
  )
}

export default Search;