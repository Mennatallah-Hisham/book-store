import React from 'react';
import {useState}from 'react';
import SignUp from '../components/Auth/SignUp';
import Login from '../components/Auth/Login';
const Auth = () => {
    const [signUp , setSignUp]=useState(true);


const toggleForm =()=>{
    setSignUp((prev)=>!prev);
}
  return (
    <>
        {signUp ?<SignUp/>: <Login/>}
   
        <p className='txt--center txt--pri'> Have an account ? <button className='link' onClick={toggleForm}>
            {signUp ?"login" : "sign up"}
            
            </button></p>
    </>
  )
}

export default Auth