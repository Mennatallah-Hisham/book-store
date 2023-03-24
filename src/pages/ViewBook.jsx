import React from 'react';

import Header from '../components/layout/Header';
import SubTitle from"../components/utility/SubTitle";
import Books from "../components/book/Books";
import BookDetails from '../components/book/BookDetails';
const ViewBook = () => {
  return (
    <React.Fragment>
        <Header title="view book"/>
        <BookDetails/>
      
    <SubTitle title=" author's books includes"/>
    <Books/>

    </React.Fragment>
  )
}

export default ViewBook