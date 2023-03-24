import React from 'react'

const BookDetails = () => {
  return (
    <section className='container m-8'>
        <div className="book">

     

    <img 
    src="https://itbook.store/img/books/9781617294136.png"
     alt="book"
      className='book__img'/>
    <div className='book__content'>
     <p className='clr-pri txt--xl'>Securing DevOps</p>
     <div className='book__nums'>
     <p className="clr-sec txt--l">39.65</p>
     <p className='clr-sec txt--l'>5</p>
     </div>
     <p className='clr-txt'>An application running in the cloud can benefit from incredible efficiencies, but they come with unique security threats too. A DevOps team&#039;s highest priority is understanding those risks and hardening the system against them.Securing DevOps teaches you the essential techniques to secure your c...</p>
    
    <p><span>author : </span>Julien Vehent </p>
    <p><span>publisher : </span>Manning  </p>
    <p><span>language : </span>English  </p>
    <p><span>pages : </span>350  </p>
    <p><span>year : </span>2018 </p>
    <p><span>isbn10 : </span>1617294136 </p>
    <p><span>isbn13 : </span>1617294136 </p>







    <button className='btn btn--filled'> add to cart</button>

    </div>
   
    </div>
    </section>
  )
}

export default BookDetails