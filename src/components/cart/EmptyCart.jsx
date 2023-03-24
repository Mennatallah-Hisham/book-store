import React from 'react';
import KeepShopping from '../utility/KeepShopping';
import SubTitle from '../utility/SubTitle';
import WishlistItems from '../wishlist/WishlistItems';
const EmptyCart = () => {
  return (
<React.Fragment>
<KeepShopping title="0 books in your cart"/>
             <SubTitle title="Recently wishlisted"/>
             <WishlistItems/>
</React.Fragment>
     

  
  )
}

export default EmptyCart;