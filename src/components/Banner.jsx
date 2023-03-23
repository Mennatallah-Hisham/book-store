import React from 'react'

const Banner = () => {
  return (
   <section className='cta'>
  
    <h3 className='cta__title '>read a free chapter</h3>
    <p className='cta__txt txt--sec txt-s'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem consequuntur aliquam sit culpa magni fugit voluptates esse rerum odio itaque placeat</p>
   


    <form className="form-flex">
    <input className="form-flex__input" type="email" placeholder="email" required/>
        <button className='btn btn--sec'>subscribe</button>
    </form>


    
    </section>
  )
}

export default Banner