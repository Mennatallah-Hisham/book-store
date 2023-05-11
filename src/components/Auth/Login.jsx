import React from 'react';
import { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store/AuthSlice';
import Header from '../layout/Header';



const Login = () => {
    const[Error,setError]=useState(false);
    const authUser =useSelector(state=>state.auth.user);
    const navigate =useNavigate();
   
    
    const dispatch =useDispatch();
    const user ={
        name:"menna",
        email:"menna@gmail.com",
        password:"778852",
    }
    

    const formSubmitHandler=(e)=>{
        e.preventDefault();
        console.log(
            user.email, authUser.email ,user.password,authUser.password,
            authUser
        )
        if(user.email === authUser.email && user.password ===authUser.password){
         

            dispatch(authActions.login);
           navigate('/shop');
         console.log("loggedin")
        }else{
            setError("true");
            //error msg

            
        }


    }
  return (
    <React.Fragment>
      <Header title="login"/>
     <form className='form ' onSubmit={formSubmitHandler}>
 


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



 <button className='btn btn--filled'>
 login
 </button>
 </form>
 {Error && <p>wrong email or password</p>}
    </React.Fragment>
   
  )
}

export default Login