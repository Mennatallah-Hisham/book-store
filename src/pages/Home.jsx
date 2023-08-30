import React from 'react';
import { useEffect , useState} from 'react';
import Banner from '../components/Banner';
import Header from '../components/layout/Header';

import Books from '../components/book/Books';


import { getBooks } from '../utility/FetchApi';
import { useDispatch } from 'react-redux';
import { bookActions } from '../store/BookSlice';


const Home = () => {
  const [books,setBooks]=useState([]);
  const dispatch = useDispatch();


  useEffect(()=>{
   
// getBooks("https://api.itbook.store/1.0/new").then((data)=>


// setBooks(

//   data.books.map(
//     book=>({...book , quantity
//       :0})
//     )
  
//   ));

getBooks("https://api.itbook.store/1.0/new").then((data)=>


dispatch(bookActions.setBookStore(

  data.books.map(
    book=>({...book , quantity
      :0})
    )
  
  )));


  },[]);







 



  return (
    <React.Fragment>
    <Header title="find your next book"/>


<Books/>
    <section>

</section>
<Banner/>


</React.Fragment>
  )
}

export default Home