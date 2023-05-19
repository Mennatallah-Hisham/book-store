import React from 'react'

import AddToCart from '../buttons/AddToCart'
const BookDetails = ({book}) => {



  return (
    <section className='container m-8'>
        <div className="book">

     

    <img 
    src={book.image}
     alt="book"
      className='book__img'/>
    <div className='book__content'>
     <p className='clr-pri txt--xl'>{book.title}</p>
     <div className='book__nums'>
     <p className="clr-sec txt--l">{book.price}</p>
     <p className='clr-sec txt--l'>{book.rating}</p>
     </div>
     <p className='clr-txt'>{book.desc}</p>
    
    <p><span>author : </span>{book.authors} </p>
    <p><span>publisher : </span>{book.publisher}  </p>
    <p><span>language : </span>{book.language}  </p>
    <p><span>pages : </span>{book.pages}  </p>
    <p><span>year : </span>{book.year} </p>
   






<div className='flex-1'>
<AddToCart book={book}/>
    <button className='btn btn--outline'> add to wishlist</button>
</div>
  

    </div>
   
    </div>
    </section>
  )
}

export default BookDetails