import React from 'react';
import { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store/AuthSlice';
import Header from '../layout/Header';
import {useForm} from "react-hook-form";



const Login = () => {
    const[Error,setError]=useState(false);
    const authUser =useSelector(state=>state.auth.user);
    const navigate =useNavigate();
   
    
    const dispatch =useDispatch();



    const onSubmit= (user)=>{
     
        if(user.email === authUser.email && user.password ===authUser.password){
         

            dispatch(authActions.login());
           navigate('/cart');
         
        }else{
            setError("true");
         

            
        }

  
    }
    const {
        register,
        handleSubmit,
        formState:{errors},
    }= useForm();


  return (
    <React.Fragment>
      <Header title="login"/>
     <form className='form form__cont ' onSubmit={handleSubmit(onSubmit)}>
 


 <div className="form__gp">
     <label
      className='form__label'
      htmlFor="email">
         email
     </label>
     <input
      type="email" 
    
      id="email" 
      className='form__input'
      {... register("email",{
        required:{
            value:true,
            message:"email is required"
        }
      })}
      />
      {errors.email?.type==="required" && <p
      className='form__error'>{errors.email.message}</p>}
 </div>

 <div className="form__gp">
     <label
      className='form__label'
      htmlFor="password">
     password
     </label>
     <input
      type="password" 
   
      id="password" 
      {... register("password",{
        required:{
            value:true,
            message:"password is required"
        },
        minLength:{
            value:6,
            message:"passowrd should be at-least 6 characters"
        }
      })}
      className='form__input'
    />
 {errors.password?.type==="minLength" && <p className='form__error'>{errors.password.message}</p>}
 {errors.password?.type==="required" && <p
 className='form__error'>{errors.password.message}</p>}

 </div>



 <button className='btn btn--filled'>
 login
 </button>
 </form>
 {Error && <p className='form__error txt--center'>wrong email or password</p>}
    </React.Fragment>
   
  )
}

export default Login