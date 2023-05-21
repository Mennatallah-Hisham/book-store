import React from 'react'
import CartDetails from '../components/cart/CartDetails';
import EmptyCart from '../components/cart/EmptyCart';

import Header from '../components/layout/Header';
import { useSelector } from 'react-redux';

const Cart = () => {


  const cartItems =useSelector((state)=>state.cart.items);

  if(cartItems===undefined){
    cartItems=[];
  }

  return (
    <React.Fragment>
    <Header title="shopping cart"/>
    {
      cartItems.length === 0 ?
     <EmptyCart/>
      
 
      :
    <CartDetails books={cartItems}/>

    }
  

</React.Fragment>
  )
}

export default Cart