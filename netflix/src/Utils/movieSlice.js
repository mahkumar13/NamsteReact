import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies= action.payload
        },
        addPopularMovie:(state,action)=>{
            state.popularMovie= action.payload
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovie= action.payload
        },
        addUpcomingMovie:(state,action)=>{
            state.upcomingMovie= action.payload
        },
        addTrailers:(state,action)=>{
            state.trailerVideo= action.payload
        }
    }
})
 export const {addNowPlayingMovies,addTrailers,addPopularMovie,addTopRatedMovies,addUpcomingMovie} = movieSlice.actions
export default movieSlice.reducer