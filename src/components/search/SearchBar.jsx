
import React from 'react';
import { useForm } from 'react-hook-form';

const SearchBar = ({onSearch}) => {
  const {
    register,
    handleSubmit,
    formState:{errors}
  }= useForm();


  const getSearchTerm =(data)=>{
 
    onSearch(data.search);


  }
  
  return (
 <section className="search-bar">

    <form className="form-flex" onSubmit={handleSubmit(getSearchTerm
      )}>
        <input className='form-flex__input' type="text" {
          ...register(
            "search",{
              required:true
            }
          
          )
        
        } 
        placeholder={errors.search?.type==="required" && " try agin"}/>
      
        <button className='btn btn--filled'>search</button>
    </form>

    </section>
  )
}

export default SearchBar