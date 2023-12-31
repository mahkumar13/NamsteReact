import { createSlice } from "@reduxjs/toolkit";


const appConfigSlice= createSlice({
    name:"appConfig",
    initialState:{
        lang:"en",
    },
    reducers:{
        changeLanguage:(state,action)=>{
            state.lang= action.payload
        }
    }
})
 export const {changeLanguage}= appConfigSlice.actions
export default appConfigSlice.reducer