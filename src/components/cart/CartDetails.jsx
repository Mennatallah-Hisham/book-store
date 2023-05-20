import React from 'react'
import { Link } from 'react-router-dom';
import SubTitle from '../utility/SubTitle';
import CartCard from './CartCard';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/CartSlice';


const CartDetails = ({books}) => {
  const dispatch = useDispatch();
  const resetCart=()=>{
    dispatch(cartActions.resetCart());

  }
  return (
  <section className='container'>
    <SubTitle title="1 book in cart"/>

<section className='flex-2 m-5'>
  {books.map((book)=>(
    <CartCard id={book.id} book={book} />
  ))}

   
</section>



// after check out reset cart
    <Link to="/checkout" className="btn btn--filled m-5">
        Checkout
    </Link>
    <button className="btn btn--outline" onClick={resetCart}>
      Empty Cart
    </button>

    </section>
  )
}

export default CartDetails