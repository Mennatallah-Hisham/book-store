import React from 'react'


import { Link } from 'react-router-dom';
const BookCard = (book) => {

  return (
  <article className='card'>

     <Link className="clr-pri txt--m" to={`/${book.id}/book`}>
      <img className="card__img" src={book.image} alt={book.subtitle}/>
      
    <div className='card__content'>
 

  {book.title}



    
   <p className='clr-sec card__price'>{book.price}</p>
  
   
   
    </div>
    </Link>
 
    



   
 
  

  

    </article>
  )
}

export default BookCard;