import { useDispatch } from "react-redux"
import { API_OPTION, POPULARMOVIEAPI } from "../Utils/constant"
import { addNowPlayingMovies, addPopularMovie } from "../Utils/movieSlice"
import { useEffect } from "react"

const usePopularMovie= ()=>{
    const dispatch = useDispatch()
  const getNowPlayingMovie= async ()=>{
    const data = await fetch(POPULARMOVIEAPI,API_OPTION)
    const json= await data.json()
    dispatch(addPopularMovie(json.results))
    
  }
  useEffect(()=>{
     getNowPlayingMovie()
  },[])
}
export default usePopularMovie