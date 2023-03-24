import React from 'react'
import CartDetails from '../components/cart/CartDetails';
import EmptyCart from '../components/cart/EmptyCart';

import Header from '../components/layout/Header';

const Cart = () => {
  const cartItems =[{}];
  return (
    <React.Fragment>
    <Header title="shopping cart"/>
    {
      cartItems.length===0 ?
     <EmptyCart/>
      
 
      :
    <CartDetails/>

    }
  

</React.Fragment>
  )
}

export default Cart