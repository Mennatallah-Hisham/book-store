import React from 'react'
import { Link } from 'react-router-dom';
import SubTitle from '../utility/SubTitle';
import CartCard from './CartCard';


const CartDetails = () => {
  return (
  <section className='container'>
    <SubTitle title="1 book in cart"/>

<section className='flex-2 m-5'>

    <CartCard/>

    <CartCard/>
    <CartCard/>
    <CartCard/>
</section>



    <Link to="/check-out" className="btn btn--filled m-5">
        Checkout
    </Link>
    <button className="btn btn--outline">
      Empty Cart
    </button>

    </section>
  )
}

export default CartDetails