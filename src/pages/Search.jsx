import React from 'react'
import { useState,useEffect } from 'react';
import Books from '../components/book/Books';

import Header from '../components/layout/Header';
import SearchBar from '../components/search/SearchBar';
import SubTitle from '../components/utility/SubTitle';
import { getBooks } from '../utility/FetchApi';
const Search = () => {
  const [searchTerm , setSearchTerm]=useState("");
  const getSearchTerm= (term)=>{

  }
  return (
    <React.Fragment>
    <Header title="search" body="All Books In One Place"/>

      <SearchBar/>
      <SubTitle title="results"/>
   
{/* <Books/> */}


</React.Fragment>
  )
}

export default Search