import React from 'react';
import Banner from '../components/Banner';
import Header from '../components/layout/Header';
import Categories from "../components/book/Categories";
import Books from '../components/book/Books';
import { useDispatch } from 'react-redux';
import{ authActions }  from '../store/AuthSlice';
import { cartActions } from '../store/CartSlice';
import { wishlistActions } from '../store/WishlistSlice';
import { useEffect } from 'react';
const Home = () => {
  const dispatch = useDispatch();
  // const setStore =()=>{
   
  // }
  const getBooks = async()=>{
    try{

      const res = await fetch("https://api.itbook.store/1.0/new");
      if(!res.ok){
        throw new Error ("something went wrong");

      }
      const data = await res.json();
      console.log(data.books);
    }catch(e){
      console.log(e);
    }

  }

  useEffect(()=>{
    console.log("hoo");
    dispatch(authActions.setAuth());
    dispatch(cartActions.setCart());
    dispatch(wishlistActions.setWishlist());
    // getBooks();
  },[]);

  

 



  return (
    <React.Fragment>
    <Header title="find your next book"/>
    <Categories/>
<Books/>
    <section>

</section>
<Banner/>


</React.Fragment>
  )
}

export default Home