import { createSlice } from "@reduxjs/toolkit";

import { getKeyValueFromLocalStorage, storeInLocaleStorage } from "../utility/localStorage";

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
            state.user=action.payload;

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

        },
        setAuth(state){
            state.isLoggedIn= getKeyValueFromLocalStorage("logedIn",false);
           state.user=getKeyValueFromLocalStorage("user","{}");
           console.log(state.user);
        }
        
    }

});


export const authActions = authSlice.actions;
export default authSlice;
