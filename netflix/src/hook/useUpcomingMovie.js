import { useDispatch } from "react-redux"
import { API_OPTION,UPCOMING_MOVIE_API } from "../Utils/constant"
import { useEffect } from "react"
import { addUpcomingMovie } from "../Utils/movieSlice"


const useUpcomingMovie= ()=>{
    const dispatch = useDispatch()
  const getNowPlayingMovie= async ()=>{
    const data = await fetch(UPCOMING_MOVIE_API,API_OPTION)
    const json= await data.json()
    dispatch(addUpcomingMovie(json.results))
    
  }
  useEffect(()=>{
     getNowPlayingMovie()
  },[])
}
export default useUpcomingMovie