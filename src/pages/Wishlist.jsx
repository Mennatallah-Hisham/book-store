import React from 'react';



import Header from '../components/layout/Header';
import KeepShopping from '../components/utility/KeepShopping';

import WishlistItems from '../components/wishlist/WishlistItems';
const Wishlist = () => {
  let wishlistArr =[{}];
  return (
    <React.Fragment>
        <Header title="your wishlist"/>

        {wishlistArr.length===0 ?
        <KeepShopping title="0 books in your wishlist"/>
       
        :
       <WishlistItems/>
        }
     

    </React.Fragment>
   
  )
}

export default Wishlist