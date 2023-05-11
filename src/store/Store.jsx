import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./AuthSlice";
import cartSlice from "./CartSlice";
import wishlistSlice from "./WishlistSlice";


const store = configureStore({
    reducer:{
        auth:authSlice.reducer,
        cart:cartSlice.reducer,
       wishlist: wishlistSlice.reducer
    }
})

export default store;