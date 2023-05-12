import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { authActions } from '../../store/AuthSlice';
authActions
const NavList = ({ismobile , onToggle}) => {
    const isLoggedIn = useSelector(state=>state.auth.isLoggedIn);
    const dispatch = useDispatch();
    const logoutHandler=()=>{
        dispatch(authActions.logout());

    }

    function toggleNav (){
    
        onToggle();
    }
 
  return (
    <React.Fragment>


    { ismobile==="true" ?
    <ul className="nav__list">
      
    <li>
           <Link to="/"
           className="nav__link" 
           onClick={toggleNav}
           
       
           >Home</Link>
           
       </li>
   
       <li>
           <Link to="/contact"
             onClick={toggleNav}
           className="nav__link">contact us</Link>

       </li>
         <li>
           <Link to="/search"
             onClick={toggleNav}
           className="nav__link">search</Link>
           
       </li>
       <li>
           <Link to="/book"
             onClick={toggleNav}
           className="nav__link">view book</Link>
           
       </li>
       <li>
           <Link to="/wishlist"
             onClick={toggleNav}
           className="nav__link">wishlist</Link>
           
       </li>
       <li>
           <Link to="/cart"
             onClick={toggleNav}
           className="nav__link">cart</Link>
           
       </li>
       {isLoggedIn
       ?
       <li>
           <button className='btn btn--filled btn--sm '
           onClick={logoutHandler}>
               logout
           </button>
       </li>
       :
       <li>
       <Link to="/auth"
         onClick={toggleNav} className='btn btn--filled btn--sm'>signUP</Link>
       
   </li>
}
    </ul>
    :
    <ul className="nav__list">
      
    <li>
           <Link to="/"
           className="nav__link" 
           
       
           >Home</Link>
           
       </li>
   
       <li>
           <Link to="/contact"
           className="nav__link">contact us</Link>

       </li>
         <li>
           <Link to="/search"
           className="nav__link">search</Link>
           
       </li>
       <li>
           <Link to="/book"
           className="nav__link">view book</Link>
           
       </li>
       <li>
           <Link to="/wishlist"
           className="nav__link">wishlist</Link>
           
       </li>
       <li>
           <Link to="/cart"
           className="nav__link">cart</Link>
           
       </li>
       {isLoggedIn
       ?
       <li>
           <button className='btn btn--filled btn--sm '
           onClick={logoutHandler}>
               logout
           </button>
       </li>
       :
       <li>
       <Link to="/auth" className='btn btn--filled btn--sm'>signUP</Link>
       
   </li>
}
    </ul>

       }
       </React.Fragment>
  )
}

export default NavList