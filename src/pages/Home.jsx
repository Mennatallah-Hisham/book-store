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

  useEffect(()=>{
    console.log("hoo");
    dispatch(authActions.setAuth());
    dispatch(cartActions.setCart());
    dispatch(wishlistActions.setWishlist());
  },[])

 



  return (
    <React.Fragment>
    <Header title="home"/>
    <Categories/>
<Books/>
    <section>

</section>
<Banner/>


</React.Fragment>
  )
}

export default Home