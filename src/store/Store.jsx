import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./AuthSlice";
import cartSlice from "./CartSlice";
import wishlistSlice from "./WishlistSlice";


const store = configureStore({
    reducer:{
        auth:authSlice,
        cart:cartSlice,
       wishlist: wishlistSlice
    }
})

export default store;