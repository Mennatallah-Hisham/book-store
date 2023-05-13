import React from 'react';
import {useForm} from "react-hook-form";
import Header from '../components/layout/Header';

const CheckOut = () => {
    const formSubmitHandler =(e)=>{
        e.preventDefault();
    }


    const {
      register,
      handleSubmit,
      formState:{errors}
    }=useForm();

    const submitHandler=(data)=>{
      console.log(data);
    }
  return (

  <React.Fragment>
     <Header title ="total price : 50$"/>
     
    <form className=" form form__cont" onSubmit={handleSubmit(submitHandler)}>
       <div className='form__gp'>

       <label htmlFor="cname"
        className='form__label'>Name on Card</label>
            <input
              className='form__input' type="text" id="cname" name="cardname" placeholder="John More Doe"
              {
                ...register("name",{
                  required:{
                    value:true,
                    message:"card-name is required"
                  }
                })
              }
              
              />
              {errors.name?.type==="required" && <p
      className='form__error'>{errors.name.message}</p>}


       </div>

       <div className='form__gp'>
       <label htmlFor="ccnum"
        className='form__label'>Credit card number</label>
            <input
              className='form__input' type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"
            
              {...register("ccnum",{
                required:
                {
                  value:"true",
                  message:"credit card number is required "
                },
                minLength:{
                  value:16,
                  message:"invalid number"
                },
                
                    maxLength:{
                      value:16,
                      message:"invalid ccv"
                    }
              })}
              />
              {errors.ccnum?.type==="required" && <p
      className='form__error'>{errors.ccnum.message}</p>}
      
              {errors.ccnum?.type==="minLength" &&errors.ccnum?.type==="maxLength" && <p
      className='form__error'>{errors.ccnum.message}</p>}

       </div>

       <div className='form__gp'>
       <label htmlFor="expmonth"
        className='form__label'>Exp Month</label>
            <input 
              className='form__input'
              type="text" id="expmonth"placeholder="September"
             
              {...register("expmonth",{
              
                required:
                {
                  value:"true",
                  message:" Exp month is required"
                },
              })}/>
               {errors.expmonth?.type==="required" && <p
 className='form__error'>{errors.expmonth.message}</p>}

       </div>
       <div className='form__gp'>
       <label htmlFor="expyear"
        className='form__label'>Exp Year</label>
                <input 
                  className='form__input'
                  type="text" id="expyear" placeholder="2018"
                  {...register("expyear",{
                    required:{
                      value:true,
                      message:  " Exp year is required"
                    }
                  ,
                    
                  })}/>
                  {errors.expyear?.type==="required" && <p
 className='form__error'>{errors.expyear.message}</p>}

       </div>
       <div className='form__gp'>
       <label htmlFor="cvv"
        className='form__label'>CVV</label>
                <input 
                  className='form__input'
                  type="text" id="cvv" placeholder="352"
                  {...register("ccv",{
                    required:{
                      value:true,
                      message:"ccv is required"
                    },
                    minLength:{
                      value:3,
                      message:"invalid ccv"
                    },
                    maxLength:{
                      value:3,
                      message:"invalid ccv"
                    }
                  })}
                  />
                      {errors.ccv?.type==="required" && <p
      className='form__error'>{errors.ccv.message}</p>}
      
              {errors.ccv?.type==="minLength" &&errors.ccv?.type==="maxLength" && <p
      className='form__error'>{errors.ccv.message}</p>}

       </div>

       <div className='form__gp'>
       <label htmlFor="adr"
        className='form__label'> Address</label>
            <input
              className='form__input' type="text" id="adr"  placeholder="542 W. 15th Street"
              {...register("address",{required:true})}/>

{errors.address?.type==="required" && <p
      className='form__error'>Address is required</p>}
      
        
            

       </div>
    

       <button className='btn btn--filled'>
 confirm
 </button>
           
           
          
    </form>
 


    </React.Fragment>
  )
}

export default CheckOut