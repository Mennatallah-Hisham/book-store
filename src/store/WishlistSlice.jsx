import {createSlice}from "@reduxjs/toolkit";
import { storeInLocaleStorage , ItemExistsInLocaleStorage ,getKeyValueFromLocalStorage} from "../utility/localStorage";


const storeState =(items , quantity)=>{
    storeInLocaleStorage("wishlist",items);

    storeInLocaleStorage("WishlistQuantity",quantity);
    console.log(quantity);
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
            }


        },
        removeItem(state,action){
            const itemId = action.payload;
         
        
           state.items= state.items.filter(i=>i.id!==itemId);
           
           state.totalQuantity--;
           storeState(state.items,state.totalQuantity);

            



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