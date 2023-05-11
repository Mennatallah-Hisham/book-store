import React from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/AuthSlice';
import {useNavigate } from 'react-router-dom';
import Header from '../layout/Header';


const SignUp = () => {
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
  return (
<React.Fragment>
<Header title="signup"/>
<form className='form ' onSubmit={formSubmitHandler}>
    <div className="form__gp">
        <label
         className='form__label'
         htmlFor="name">
            name
        </label>
        <input
         type="txt" 
         name="name" 
         id="name" 
         className='form__input'
         required/>
    </div>



    <div className="form__gp">
        <label
         className='form__label'
         htmlFor="email">
            email
        </label>
        <input
         type="email" 
         name="email" 
         id="email" 
         className='form__input'
         required/>
    </div>

    <div className="form__gp">
        <label
         className='form__label'
         htmlFor="password">
        password
        </label>
        <input
         type="password" 
         name="password" 
         id="password" 
         className='form__input'
         required/>
    </div>
 



    <button className='btn btn--filled' >
        Sign Up
    </button>
    </form>
</React.Fragment>
   
    

   
  )
}

export default SignUp