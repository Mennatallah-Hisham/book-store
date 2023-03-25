import { createSlice } from "@reduxjs/toolkit";

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

        },
        removeItem(state,action){

        }
    }
});



export const cartActions =cartSlice.actions;
export default cartSlice;