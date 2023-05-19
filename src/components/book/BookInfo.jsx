import React from 'react'

const BookInfo = ({book}) => {
console.log(book);

 
  return (
 <React.Fragment>
      <img className="card__img" src={book.image} alt={book.subtitle}/>
    <div className='card__content'>
    <p className="clr-pri txt--m">{book.title}</p>
 
    

    
    <div className="flex-2">
    <p className='clr-sec card__price'>rate</p>
    <p className='clr-sec card__price'>{book.price}</p>
    </div>
   
    </div>

    </React.Fragment>
  )
}

export default BookInfo