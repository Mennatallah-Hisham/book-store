
import { createSlice } from "@reduxjs/toolkit";

const initialState={
    books:[]
}

const bookSlice=createSlice({
name:"books",
initialState,
reducers:{
    setBookStore(state,action){
        console.log(action.payload)
        state.books=action.payload


    },
    getBook(state,action){

    }
}

});

export const bookActions = bookSlice.actions;

export default bookSlice;