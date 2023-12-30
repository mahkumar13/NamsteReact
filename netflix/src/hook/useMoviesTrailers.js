import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../Utils/constant";
import { addTrailers } from "../Utils/movieSlice";
import { useEffect } from "react";

const useMoviesTrailers = (id)=>{
    const dispatch = useDispatch();
    const videoKey = useSelector(store=>store.movies?.trailerVideo?.key)  // using redux toolkit 
   const getMovieVideo= async ()=>{
       const data= await fetch("https://api.themoviedb.org/3/movie/"
       +id+"/videos?language=en-US"
       ,API_OPTION)
       const json= await data.json()
      // console.log(json.results )
       const filterData= json.results.filter((video)=>video.type==="Trailer")
       
       const trailer= filterData[0]
       dispatch(addTrailers(trailer))
     //  console.log(trailer)
      // setVideoKey(trailer.key )
   }
   useEffect(()=>{
       getMovieVideo()
   },[])
}
export default useMoviesTrailers