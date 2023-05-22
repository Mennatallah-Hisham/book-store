import React from 'react';
import { useEffect , useState} from 'react';
import Banner from '../components/Banner';
import Header from '../components/layout/Header';

import Books from '../components/book/Books';


import { getBooks } from '../utility/FetchApi';


const Home = () => {
  const [books,setBooks]=useState([]);
  


  useEffect(()=>{
   
getBooks("https://api.itbook.store/1.0/new").then((data)=>setBooks(data.books));
  },[]);

  

 



  return (
    <React.Fragment>
    <Header title="find your next book"/>


<Books books={books}/>
    <section>

</section>
<Banner/>


</React.Fragment>
  )
}

export default Home