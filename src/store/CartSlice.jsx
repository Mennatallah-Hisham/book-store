import { createSlice } from "@reduxjs/toolkit";
import { existsInLocaleStorage ,storeInLocaleStorage } from "../utility/localStorage";

const initialState ={
    items:[],
    totalNum:0,
    totalPrice:0,
  
  
}


const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        reset(state){
            state.items=[];
            state.totalNum=0;
            state.totalPrice=0;
        },
        addItem(state,action){
            // quantity ==1
            const item = action.payload;
            const existingItem = existsInLocaleStorage("cart",item.id);
            if(!existingItem){
                state.items.push({
                    id:item.id,
                    price:item.price,
                    quantitiy:1,
                    totalPrice:item.price,
                    name:item.title,
                    
                });
            


            }else{
                existingItem.quantitiy++;
                existingItem.total=existingItem.price+existingItem.totalPrice;


            }
           
            storeInLocaleStorage("cart",state.items);
      

        },
        removeItem(state,action){
            const item =action.payload;
            const existingItem=existsInLocaleStorage("cart",item.id);
            if( existingItem.quantitiy===1){
                state.items.filter(i=>i.id!== item.id);

            }
            else{
                existingItem.quantitiy--;
                existingItem.totalPrice=existingItem.totalPrice-existingItem.price;
            }

            storeInLocaleStorage("cart",state.items);
          
        },
        isAdded(state,action){
           
            const itemId = action.payload;
          return existsInLocaleStorage("cart",action.payload);


        }
        ,
        // setCart
        // onload if cart is in localstorage
        // set state.items of cart == localstorage cart arr
    }
});



export const cartActions =cartSlice.actions;
export default cartSlice;