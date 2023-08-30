import React from 'react'


import { Link } from 'react-router-dom';
const BookCard = (book) => {

  return (
  <article className='card'>

     <Link className="clr-pri txt--m" to={`/${book.id}/book`}>
      <div>
          <img className="card__img" src={book.image} alt={book.subtitle}/>

      </div>
    
      
    <div className='card__content'>
  

<p>
{book.title}
</p>
<p className='card__price'>{book.price}</p>




    

  
   
   
    </div>
    </Link>
 
    



   
 
  

  

    </article>
  )
}

export default BookCard;