import React from 'react'

const CheckOut = () => {
    const formSubmitHandler =(e)=>{
        e.preventDefault();
    }
  return (

  <React.Fragment>
    <form>
       <div className='form__gp'>

       <label for="cname">Name on Card</label>
            <input type="text" id="cname" name="cardname" placeholder="John More Doe"/>

       </div>
       <div className='form__gp'>
       <label for="ccnum">Credit card number</label>
            <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>

       </div>
       <div className='form__gp'>
       <label for="expmonth">Exp Month</label>
            <input type="text" id="expmonth" name="expmonth" placeholder="September"/>

       </div>
       <div className='form__gp'>
       <label for="expyear">Exp Year</label>
                <input type="text" id="expyear" name="expyear" placeholder="2018"/>

       </div>
       <div className='form__gp'>
       <label for="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" placeholder="352"/>

       </div>
       <div className='form__gp'>
       <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
            <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"/>
            

       </div>
       <div className='form__gp'>
       <label for="city"><i class="fa fa-institution"></i> City</label>
            <input type="text" id="city" name="city" placeholder="New York"/>

       </div>

   
           
           
          
    </form>
    <p>delievery takes 3days</p>


    </React.Fragment>
  )
}

export default CheckOut