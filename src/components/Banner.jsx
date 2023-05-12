import React from 'react';
import SubTitle  from "./utility/SubTitle";

const Banner = () => {
  return (
   <section className='container'>
    <div className="cta">
    <SubTitle title="read a free chapter"/>
    <p className='cta__txt txt--pri txt--sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem consequuntur aliquam sit culpa magni fugit voluptates esse rerum odio itaque placeat</p>
   


    <form className="form-flex">
    <input className="form-flex__input" type="email" placeholder="email" required/>
        <button className='btn btn--sec'>subscribe</button>
    </form>

    </div>
  
   
    
    </section>
  )
}

export default Banner