import React from 'react'

import Header from '../components/layout/Header';
import SearchBar from '../components/search/SearchBar';
const Search = () => {
  return (
    <React.Fragment>
    <Header title="search" body="All Books In One Place"/>
    <section>
      <SearchBar/>

</section>

</React.Fragment>
  )
}

export default Search