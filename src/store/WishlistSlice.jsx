import {createSlice}from "@reduxjs/toolkit";
import { storeInLocaleStorage ,getKeyValueFromLocalStorage} from "../utility/localStorage";
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const storeState =(items , quantity)=>{
    storeInLocaleStorage("wishlist",items);

    storeInLocaleStorage("WishlistQuantity",quantity);
 
}
const notify =(msg)=>{
    toast(msg,{
        position: toast.POSITION.BOTTOM_LEFT,
    
        theme:'light',
     
    });

}
const initialState={
    items:[],
    totalQuantity:0,
    
  
  
}

const wishlistSlice = createSlice({
    name:"wishlist",
    initialState,
    reducers:{
        addItem(state,action){
            const item =action.payload;
            const existingItem = state.items.find(i=>i.id===item.id);
            if(!existingItem){

      
            state.items.push(item);
            state.totalQuantity++;
          storeState(state.items,state.totalQuantity);
          notify("book added to wishlist");
            }else{

                notify("book already in wishlist");
            }

           

        },
        removeItem(state,action){
            const itemId = action.payload;
         
        
           state.items= state.items.filter(i=>i.id!==itemId);
           
           state.totalQuantity--;
           storeState(state.items,state.totalQuantity);

           notify("book removed from wishlist");



        }
        ,
        setWishlist(state){
            state.items = getKeyValueFromLocalStorage("wishlist","[]");
            state.totalQuantity=getKeyValueFromLocalStorage("wishlistQuantity","0");

        }
       

    }
});


export const wishlistActions =wishlistSlice.actions;
export default wishlistSlice;