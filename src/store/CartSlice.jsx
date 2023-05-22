import { createSlice } from "@reduxjs/toolkit";
import {storeInLocaleStorage , getKeyValueFromLocalStorage} from "../utility/localStorage";
import { toast } from 'react-toastify';

const storeState =(items , quantity,totalPrice)=>{
    storeInLocaleStorage("cart",items);
    storeInLocaleStorage("cartQuantity",quantity);
    storeInLocaleStorage("totalPrice", Math.round(totalPrice));
}

const notify =(msg)=>{
    toast(msg,{
        position: toast.POSITION.BOTTOM_LEFT,
    
        theme:'light',
     
    });

}
const initialState ={
    items:[],
    totalQuantity:0,
    totalPrice:0,

  
  
}



const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
   
        addItem(state,action){
          
            
            // quantity ==1
            const item = action.payload;
            
            const existingItem = state.items.find(i=>i.id===item.id);
      
            if(!existingItem){
                state.items.push({
                    id:item.id,
                    price:item.price,
                    quantity:1,
                    totalPrice:parseFloat(item.price.replace(/[^\d\.]*/g, '')),
                    title:item.title,
                    image:item.image

                    
                });
            
                notify("book added to cart");

            }else{
                existingItem.quantity++;
                existingItem.totalPrice=parseFloat(existingItem.price.replace(/[^\d\.]*/g, ''))+existingItem.totalPrice;
           


            }
            state.totalQuantity++;
            state.totalPrice+=parseFloat(item.price.replace(/[^\d\.]*/g, ''));
            
        storeState(state.items,state.totalQuantity,state.totalPrice);
            
      

        },
        removeItem(state,action){
            const itemId =action.payload;
            const existingItem=state.items.find(i=>i.id===itemId);
            if( existingItem.quantity===1){
              state.items =  state.items.filter(i=>i.id!== itemId);

            }
            else{
                existingItem.quantity--;
                existingItem.totalPrice=existingItem.totalPrice-parseFloat(existingItem.price.replace(/[^\d\.]*/g, ''));
            }
            state.totalQuantity--;
            state.totalPrice-=parseFloat(existingItem.price.replace(/[^\d\.]*/g, ''));
            
            storeState(state.items,state.totalQuantity,state.totalPrice);
                
          
        },
        deleteItem(state,action){
            const itemId=action.payload;
            const existingItem=state.items.find(i=>i.id===itemId);
            state.totalQuantity=state.totalQuantity - existingItem.quantity;
            state.totalPrice-=existingItem.totalPrice;
          state.items=  state.items.filter(i=>i.id!== itemId);
            
          storeState(state.items,state.totalQuantity,state.totalPrice);
              
          notify("book removed from cart");
        }
        ,
        setCart(state){
            state.items = getKeyValueFromLocalStorage("cart","[]");
            state.totalQuantity = getKeyValueFromLocalStorage("cartQuantity","0");
            state.totalPrice = getKeyValueFromLocalStorage("totalPrice","0");


            
        },
        resetCart(state){
            state.items=[];
            state.totalQuantity=0;
            state.totalPrice=0
            storeState(state.items,state.totalQuantity,state.totalPrice);

         
        },
       
    }
});



export const cartActions =cartSlice.actions;
export default cartSlice;