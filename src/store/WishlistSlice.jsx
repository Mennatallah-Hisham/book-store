import {createSlice}from "@reduxjs/toolkit";


const initialState={
    items:[],
    totalNum:0,
}
const wishlistSlice = createSlice({
    name:"wishlist",
    initialState,
    reducers:{
        addItem(state,action){

        },
        removeItem(state,action){

        }

    }
});


export const wishlistActions =wishlistSlice.actions;
export default wishlistSlice;