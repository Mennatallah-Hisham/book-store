import {createSlice}from "@reduxjs/toolkit";
import { storeInLocaleStorage , ItemExistsInLocaleStorage ,getKeyValueFromLocalStorage} from "../utility/localStorage";

const initialState={
    items:[],
  
  
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
         
            return ItemExistsInLocaleStorage("wishlist",action.payload);
        
            
        }
        ,
        setWishlist(state){
            state.items = getKeyValueFromLocalStorage("wishlist","[]");

        }
        // setWishlist
        // onload if wishlist is in localstorage
        // set state.items of whishlist == localstorage wishlist arr
        // getKeyValueFromLocalStorage("wishlist",[]);

    }
});


export const wishlistActions =wishlistSlice.actions;
export default wishlistSlice;