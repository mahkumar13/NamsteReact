import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovie:null,
        topRatedMovie:null,
        upcomingMovie:null,
        suggestionMovie:null
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
        addSuggestionMovie:(state,action)=>{
            state.suggestionMovie=action.payload
        },
        addTrailers:(state,action)=>{
            state.trailerVideo= action.payload
        },
        addTrailer: (state,action)=>{
            state.trailer = action.payload;
        },
        addMovieDetail:(state,action)=>{
            state.movieDetail= action.payload
        },
        addCast:(state,action)=>{
            state.castDetail= action.payload
        }

    }
})
 export const {addNowPlayingMovies,addTrailers,addPopularMovie,addTopRatedMovies,addUpcomingMovie,addSuggestionMovie,addTrailer,addMovieDetail,addCast} = movieSlice.actions
export default movieSlice.reducer