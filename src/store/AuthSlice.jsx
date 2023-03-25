import { createSlice } from "@reduxjs/toolkit";


const initialState={
    isLoggedIn:false,
}

const authSlice =createSlice({
    name:"auth",
    initialState,
    reducers:{
        signUp(state,action){

        },
        login(state,action){

        },
        logout(state,action){

        }
    }

});


export const authActions = authSlice.actions;
export default authSlice;
