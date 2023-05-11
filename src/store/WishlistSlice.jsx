import {createSlice}from "@reduxjs/toolkit";
import { storeInLocaleStorage } from "../utility/localStorage";

const initialState={
    items:[],
    totalNum:0,
  
}
const wishlistSlice = createSlice({
    name:"wishlist",
    initialState,
    reducers:{
        addItem(state,action){
            const item =action.payload;
            state.items.push(item);
            storeInLocaleStorage("wishlist",state.items);


        },
        removeItem(state,action){
            const itemId = action.payload;
            state.items.filter(i=>i.id!==itemId);
            storeInLocaleStorage.apply("wishlist",state.items);

            



        },
        isAdded(state,action){
            const itemId = action.payload;
         
            return existsInLocaleStorage("wishlist",action.payload);
        
            
        }
        ,
        // setWishlist
        // onload if wishlist is in localstorage
        // set state.items of whishlist == localstorage wishlist arr

    }
});


export const wishlistActions =wishlistSlice.actions;
export default wishlistSlice;