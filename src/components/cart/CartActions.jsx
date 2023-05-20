import React from 'react'
import { useDispatch } from 'react-redux';
import { wishlistActions } from '../../store/WishlistSlice';
import { cartActions } from '../../store/CartSlice';
const CartActions = ({book}) => {

  const dispatch = useDispatch();
  const deleteItem=()=>{
    dispatch(cartActions.deleteItem(book.id));
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
          image:book.image
      }));

  }
  const moveToCart =()=>{
    deleteItem();
    
    dispatch(wishlistActions.addItem({

    id:book.id ? book.id :book.isbn13,
        price:book.price,
        image:book.image,
        title:book.title,
        image:book.image
    }));



  }

  return (
    <div>

<div className='btns'>
<button className='btn btn--sm btn--sec'
onClick={removeItem}
>-</button>
<button className='btn btn--sm btn--sec'
onClick={
  addItem
}>+</button>
</div>

        <button className='btn btn--sm btn--filled ' onClick={deleteItem}> remove</button>
        <button className='btn btn--sm btn--outline ' onClick={moveToCart}> move to wishlist</button>
    </div>
  )
}

export default CartActions