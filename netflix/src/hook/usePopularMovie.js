import { useDispatch, useSelector } from "react-redux"
import { API_OPTION, POPULARMOVIEAPI } from "../Utils/constant"
import {  addPopularMovie } from "../Utils/movieSlice"
import { useEffect } from "react"

const usePopularMovie= ()=>{
    const dispatch = useDispatch()
    const popularMovie= useSelector(store=>store.movies.popularMovie)
  const getNowPlayingMovie= async ()=>{
    const data = await fetch(POPULARMOVIEAPI,API_OPTION)
    const json= await data.json()
    dispatch(addPopularMovie(json.results))
    
  }
  useEffect(()=>{
    if(!popularMovie) getNowPlayingMovie()
    
  },[])
}
export default usePopularMovie