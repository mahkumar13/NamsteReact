import { useDispatch, useSelector } from "react-redux"
import { API_OPTION, NOW_PLAYINGMOVIESAPI } from "../Utils/constant"
import { addNowPlayingMovies } from "../Utils/movieSlice"
import { useEffect } from "react"

const useNowPlayingMovies= ()=>{
    const dispatch = useDispatch()
    const nowPlayingMovie= useSelector(store=>store.movies.nowPlayingMovies)
  const getNowPlayingMovie= async ()=>{
    const data = await fetch(NOW_PLAYINGMOVIESAPI,API_OPTION)
    const json= await data.json()
    dispatch(addNowPlayingMovies(json.results))
    
  }
  useEffect(()=>{
    if(!nowPlayingMovie){ getNowPlayingMovie()}
     
  },[])
}
export default useNowPlayingMovies