import { createSlice } from "@reduxjs/toolkit";

import { storeInLocaleStorage } from "../utility/localStorage";

const initialState={
    user:{
        name:"",
        email:"",
        password:"",
    },
    isLoggedIn:false,
}

const authSlice =createSlice({
    name:"auth",
    initialState,
    reducers:{
        signUp(state,action){

            state.isLoggedIn=true;
            state.user=action.user;

            storeInLocaleStorage("logedIn",true);
            storeInLocaleStorage("user",state.user);


        },
        login(state,action){
         
                    state.isLoggedIn=true;
                    storeInLocaleStorage("logedIn",true);
               
       

        },
        logout(state){
            state.isLoggedIn=false;
            storeInLocaleStorage("logedIn",false);

        }
    }

});


export const authActions = authSlice.actions;
export default authSlice;
