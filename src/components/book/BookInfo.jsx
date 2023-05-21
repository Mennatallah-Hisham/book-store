import React from 'react';
import { Link } from 'react-router-dom';

const BookInfo = ({book}) => {


 
  return (
 <React.Fragment>
      <img className="card__img" src={book.image} alt={book.subtitle}/>
    <div className='card__content'>
    <Link className="clr-pri txt--m" to={`/${book.id}/book`}>

  {book.title}

view
   </Link>
 
    

    

    <p className='clr-sec card__price'>{book.price}</p>
  
   
    </div>

    </React.Fragment>
  )
}

export default BookInfo