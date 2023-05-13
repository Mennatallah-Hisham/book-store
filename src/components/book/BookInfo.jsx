import React from 'react'

const BookInfo = () => {
  return (
 <React.Fragment>
      <img className="card__img" src="./book.jpg" alt="book"/>
    <div className='card__content'>
    <p className="clr-pri txt--m">Hands-On Data Structures and Algorithms with Python, 3rd Edition</p>
 
    

    
    <div className="flex-2">
    <p className='clr-sec card__price'>rate</p>
    <p className='clr-sec card__price'>price</p>
    </div>
   
    </div>

    </React.Fragment>
  )
}

export default BookInfo