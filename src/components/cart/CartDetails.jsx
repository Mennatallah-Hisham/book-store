import React from 'react'
import { Link } from 'react-router-dom';
import SubTitle from '../utility/SubTitle';
import CartCard from './CartCard';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/CartSlice';


const CartDetails = ({books}) => {
  const dispatch = useDispatch();
  const quantity= useSelector((state)=>state.cart.totalQuantity);
  const totalPrice =useSelector((state)=>state.cart.totalPrice);
  const resetCart=()=>{
    dispatch(cartActions.resetCart());

  }

  return (
  <section className='container'>
    <SubTitle title={quantity===1?`${quantity} book in cart` :`${quantity} books in cart`  }/>

<section className='flex-2 m-5'>
  {books.map((book)=>(
    <CartCard key={book.id} book={book} />
  ))}

   
</section>


<p className='txt--sec'> Total Price : {`${totalPrice}$`}</p>

<div className='m-1'>

    <button className="btn btn--outline" onClick={resetCart}>
      Empty Cart
    </button>
    <Link to="/checkout" className="btn btn--filled m-5">
        Checkout
    </Link>

</div>

    </section>
  )
}

export default CartDetails