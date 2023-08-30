import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./AuthSlice";
import cartSlice from "./CartSlice";
import wishlistSlice from "./WishlistSlice";
import bookSlice from "./BookSlice";


const store = configureStore({
    reducer:{
        auth:authSlice.reducer,
        cart:cartSlice.reducer,
       wishlist: wishlistSlice.reducer,
       books:bookSlice.reducer
    }
})

export default store;