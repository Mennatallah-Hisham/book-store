import React from 'react'
import { cartActions } from '../../store/CartSlice';
import { useDispatch } from 'react-redux';
const AddToCart = ({book}) => {

   
      const dispatch =useDispatch();

  const addToCart =()=>{
    dispatch(cartActions.addItem({
        id:book.id ? book.id :book.isbn13,
        price:book.price,
        image:book.image,
        title:book.title,
   

    }));
  }
  const removeItem =()=>{
    dispatch(cartActions.removeItem(book.id));
  }
  const addItem =()=>{
    dispatch(cartActions.addItem({

      id:book.id ? book.id :book.isbn13,
          price:book.price,
          image:book.image,
          title:book.title,
       
      }));

  }

  console.log(book)

  return (
    <>
    <div className='btns'>
<button className='btn btn--sm btn--sec'
onClick={removeItem}
>-</button>
<p className='txt--sec'> { book.quantity}</p>

<button className='btn btn--sm btn--sec'
onClick={
  addItem
}>+</button>
</div>
<button className='btn btn--sm btn--filled' onClick={addToCart}>
            Add to cart
        </button>

    </>
   
  )
}

export default AddToCart