import { createSlice } from "@reduxjs/toolkit";

const gptSerachSlice= createSlice({
    name:"gpt",
    initialState:{
        showGptSerach:false,
        movieResult:null,
        movieNames:null

    },
    reducers:{
        toggleGptSerachView :(state,action)=>{
         state.showGptSerach= !state.showGptSerach
        },
        addGPTMoviesResult:(state,action)=>{
            const {movieNames,movieResult}= action.payload
            state.movieNames= movieNames;
            state.movieResult=movieResult

        }
    }
})
export const {toggleGptSerachView,addGPTMoviesResult} = gptSerachSlice.actions
export default gptSerachSlice.reducer