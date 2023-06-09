import React from 'react';



import Header from '../components/layout/Header';
import KeepShopping from '../components/utility/KeepShopping';

import WishlistItems from '../components/wishlist/WishlistItems';
import { useSelector } from 'react-redux';
const Wishlist = () => {

let wishlistArr = useSelector(state=>state.wishlist.items);
  if(wishlistArr===undefined){
    wishlistArr=[];
  }
  

  
  return (
    <React.Fragment>
        <Header title="your wishlist"/>

        {
        wishlistArr.length === 0  ?
        <KeepShopping title="0 books in your wishlist"/>
       
        :
     <WishlistItems books={wishlistArr}/>
        }
     

    </React.Fragment>
   
  )
}

export default Wishlist