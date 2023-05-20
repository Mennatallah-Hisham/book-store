import { createSlice } from "@reduxjs/toolkit";
import { ItemExistsInLocaleStorage ,storeInLocaleStorage ,getItemFromLocalStorage, getKeyValueFromLocalStorage} from "../utility/localStorage";

const initialState ={
    items:[],

  
  
}


const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
   
        addItem(state,action){
            console.log(action.payload);
            
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
            


            }else{
                existingItem.quantity++;
                existingItem.totalPrice=parseFloat(existingItem.price.replace(/[^\d\.]*/g, ''))+existingItem.totalPrice;
           


            }
            
        
            storeInLocaleStorage("cart",state.items);
      

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

            storeInLocaleStorage("cart",state.items);
          
        },
        deleteItem(state,action){
            const itemId=action.payload;
          state.items=  state.items.filter(i=>i.id!== itemId);
            storeInLocaleStorage("cart",state.items);

        },

        isAdded(state,action){
           
            const itemId = action.payload;
          return ItemExistsInLocaleStorage("cart",itemId);


        }
        ,
        setCart(state){
            state.items = getKeyValueFromLocalStorage("cart","[]");


            
        },
        resetCart(state){
            state.items=[];
            storeInLocaleStorage("cart",state.items);

         
        },
       
    }
});



export const cartActions =cartSlice.actions;
export default cartSlice;