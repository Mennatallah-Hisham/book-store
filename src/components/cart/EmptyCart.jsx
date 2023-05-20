import React from 'react';
import KeepShopping from '../utility/KeepShopping';
import SubTitle from '../utility/SubTitle';
import WishlistItems from '../wishlist/WishlistItems';
import { useSelector } from 'react-redux';

const EmptyCart = () => {
  const wishlistArr = useSelector(state=>state.wishlist.items);
  if(wishlistArr===undefined){
    wishlistArr=[];
  }
  console.log(wishlistArr);
  return (
<React.Fragment>
<KeepShopping title="0 books in your cart"/>
           
             {
        wishlistArr.length === 0  ?
      <></>
       
        :
        <>
     <SubTitle title="Recently wishlisted"/>
     <WishlistItems books={wishlistArr}/>
        </>
        }

           
            
</React.Fragment>
     

  
  )
}

export default EmptyCart;