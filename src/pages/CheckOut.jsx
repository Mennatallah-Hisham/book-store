import React from 'react'
import Header from '../components/layout/Header';

const CheckOut = () => {
    const formSubmitHandler =(e)=>{
        e.preventDefault();
    }
  return (

  <React.Fragment>
     <Header title ="total price : 50$"/>
    <form className=" form form__cont" onSubmit={formSubmitHandler}>
       <div className='form__gp'>

       <label for="cname"
        className='form__label'>Name on Card</label>
            <input
              className='form__input' type="text" id="cname" name="cardname" placeholder="John More Doe"/>

       </div>
       <div className='form__gp'>
       <label for="ccnum"
        className='form__label'>Credit card number</label>
            <input
              className='form__input' type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>

       </div>
       <div className='form__gp'>
       <label for="expmonth"
        className='form__label'>Exp Month</label>
            <input 
              className='form__input'
              type="text" id="expmonth" name="expmonth" placeholder="September"/>

       </div>
       <div className='form__gp'>
       <label for="expyear"
        className='form__label'>Exp Year</label>
                <input 
                  className='form__input'
                  type="text" id="expyear" name="expyear" placeholder="2018"/>

       </div>
       <div className='form__gp'>
       <label for="cvv"
        className='form__label'>CVV</label>
                <input 
                  className='form__input'
                  type="text" id="cvv" name="cvv" placeholder="352"/>

       </div>
       <div className='form__gp'>
       <label for="adr"
        className='form__label'><i class="fa fa-address-card-o"></i> Address</label>
            <input
              className='form__input' type="text" id="adr" name="address" placeholder="542 W. 15th Street"/>
            

       </div>
    

       <button className='btn btn--filled'>
 confirm
 </button>
           
           
          
    </form>
 


    </React.Fragment>
  )
}

export default CheckOut