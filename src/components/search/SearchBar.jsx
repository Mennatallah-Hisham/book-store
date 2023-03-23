
import React from 'react'

const SearchBar = () => {
  return (
 <section className="search-bar">

    <form className="form-flex">
        <input className='form-flex__input' type="text" required />
        <button className='btn btn--filled'>search</button>
    </form>

    </section>
  )
}

export default SearchBar