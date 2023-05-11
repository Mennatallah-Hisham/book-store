import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from 'react-redux';
import { authActions } from '../../store/AuthSlice';




const Nav = () => {
    const isLoggedIn = useSelector(state=>state.auth.isLoggedIn);
    const dispatch = useDispatch();
    const logoutHandler=()=>{
        dispatch(authActions.logout());

    }
  return (
    <nav className='flex-2'>
    <ul className='flex-2'>
        <li>
            <Link to="/">Home</Link>
            
        </li>
        <li>
            <Link to="/shop">shop</Link>

        </li>
        <li>
            <Link to="/contact">contact us</Link>

        </li>
    </ul>
    <ul className='flex-2'>
        <li>
            <Link to="/search">search</Link>
            
        </li>
        <li>
            <Link to="/book">view book</Link>
            
        </li>
        <li>
            <Link to="/wishlist">wishlist</Link>
            
        </li>
        <li>
            <Link to="/cart">cart</Link>
            
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
</nav>
  );
}

export default Nav;