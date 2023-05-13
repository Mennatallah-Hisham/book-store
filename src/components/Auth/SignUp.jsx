import React from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/AuthSlice';
import {useNavigate } from 'react-router-dom';
import {useForm} from "react-hook-form";
import Header from '../layout/Header';


const SignUp = () => {
    const {register, handleSubmit ,formState:{errors}}=useForm();
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const signUpHandler=()=>{

        dispatch(authActions.signUp({
            name:"menna",
            email:"menna@gmail.com",
            password:"778852",
        }))

    }

    const formSubmitHandler= (e)=>{
        e.preventDefault();
        signUpHandler();
        navigate("/");
    }

    const submitHandler =(data)=>{
        console.log(data);
    }
  return (
<React.Fragment>
<Header title="signup"/>
<form className='form form__cont ' onSubmit={handleSubmit(submitHandler)}>
    <div className="form__gp">
        <label
         className='form__label'
         htmlFor="name">
            name
        </label>
        <input
         type="txt" 
       
         id="name" 
         className='form__input'
         {...register("username",{
            required:"username is required"
         })}/>
         {errors.username?.type==="required" &&
         <p className="form__error">
            {errors.username.message}
            </p>}
    </div>



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
         className='form__input'
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
     />
      {errors.password?.type==="minLength" && <p className='form__error'>{errors.password.message}</p>}
 {errors.password?.type==="required" && <p
 className='form__error'>{errors.password.message}</p>}
    </div>
 



    <button className='btn btn--filled' >
        Sign Up
    </button>
    </form>
</React.Fragment>
   
    

   
  )
}

export default SignUp