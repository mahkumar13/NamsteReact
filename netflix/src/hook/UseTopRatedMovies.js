import { useDispatch, useSelector } from "react-redux"
import { API_OPTION, TOPRATED_MOVIES } from "../Utils/constant"
import {addTopRatedMovies } from "../Utils/movieSlice"
import { useEffect } from "react"


const useTopRatedMovies= ()=>{
    const dispatch = useDispatch()
    const topRatedMovie= useSelector(store=>store.movies.topRatedMovie)
  const getNowPlayingMovie= async ()=>{
    const data = await fetch(TOPRATED_MOVIES,API_OPTION)
    const json= await data.json()
    dispatch(addTopRatedMovies(json.results))
    
  }
  useEffect(()=>{
    if(!topRatedMovie) getNowPlayingMovie()
    
  },[])
}
export default useTopRatedMovies