import React from 'react';
import {useState,useEffect} from "react";
import { getBookDetails , getBooks} from '../utility/FetchApi';
import { useParams } from 'react-router-dom';

import Header from '../components/layout/Header';
import SubTitle from"../components/utility/SubTitle";
import Books from "../components/book/Books";
import BookDetails from '../components/book/BookDetails';
const ViewBook = () => {
  const [book,setBook]= useState({});
  const [authorBooks, setAuthorBooks]=useState([]);

  const {id}=useParams();



   let url=`https://api.itbook.store/1.0/books/${id}`;
   useEffect(()=>{
    getBookDetails(url).then((data)=>setBook({...data,quantity:0}));

  getBooks(`https://api.itbook.store/1.0/search/${book.authors}`).then((data)=>setAuthorBooks(data.books));

  },[id]);


 
  return (
    <React.Fragment>
        <Header title="view book"/>
        <BookDetails  book={book}/>
      
    <SubTitle title=" author's books includes"/>
    {authorBooks.length===0 ? <p> no books found ...  </p>: <Books books={authorBooks}/> }
 
    </React.Fragment>
  )
}

export default ViewBook