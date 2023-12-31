import { createSlice } from "@reduxjs/toolkit";

const gptSerachSlice= createSlice({
    name:"gpt",
    initialState:{
        showGptSerach:false
    },
    reducers:{
        toggleGptSerachView :(state,action)=>{
         state.showGptSerach= !state.showGptSerach
        }
    }
})
export const {toggleGptSerachView} = gptSerachSlice.actions
export default gptSerachSlice.reducer