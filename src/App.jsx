import Footer from "./components/layout/Footer";
import Nav from "./components/layout/Nav";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { authActions } from "./store/AuthSlice";
import { cartActions } from "./store/CartSlice";
import { wishlistActions } from "./store/WishlistSlice";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';


function App() {
  const dispatch = useDispatch();
  useEffect(()=>{

    dispatch(authActions.setAuth());
    dispatch(cartActions.setCart());
    dispatch(wishlistActions.setWishlist());
  },[]);
  return (
    <div className="App">
      <Nav/>
      <ToastContainer toastStyle={{color:"#1b3764",
    fontSize:"1.4rem",
    textTransform:"capitalize"}} />
      <Outlet/>
      <Footer/>
      
    </div>
  )
}

export default App
