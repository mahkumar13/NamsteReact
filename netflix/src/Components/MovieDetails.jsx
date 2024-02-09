import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { API_OPTION, MOVIE_DETAILS_API } from '../Utils/constant'
import VideoBackGround from './VideoBackGround'
import MovieCard from './MovieCard'
import MovieSuggestion from './MovieSuggestion'
import { useMovieSuggestion } from '../hook/useMovieSuggestion'


const MovieDetails = () => {
   const navigate= useNavigate()
    const [movieData,setMovieData]= useState()
    const [poster_path,setPosterPath]=useState()
    const [youtubeKey,setYoutubeKey]= useState(695721)
    const params= useParams()
    const{id}= params
   
     console.log(id)
    const getMovieDetails= async(id)=>{
        const data=  await fetch(MOVIE_DETAILS_API+id,API_OPTION)
        const json= await data.json()
        // console.log(json)
        setMovieData(json)
        setPosterPath(json.poster_path)

    }
    const getTrailerVideo= async(id)=>{
      const data= await fetch("https://api.themoviedb.org/3/movie/"+id+"/videos",API_OPTION)
      const json = await data.json()
      const filterData= json.results.filter((video)=>video.type==="Trailer")
      setYoutubeKey(filterData[0].key)
      //  console.log("trailer",filterData[0].key)
    }
    useEffect(()=>{
        getMovieDetails(id)
    },[])
    useEffect(()=>{
      getTrailerVideo(id)
    },[])
    const x = ()=>{
      navigate("/browse")
    }


  return (
    <div>
    <div className='mt-2 flex justify-between bg-gray-400'>
    <div> 
    <iframe 
    className='w-[1000px]  aspect-video bg-yellow-50'
    src={"https://www.youtube.com/embed/"+youtubeKey+"?&autoplay=1&mute=1" }
    title="YouTube video player" frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
   ></iframe>
    </div>
    <div>
    <button className='bg-red-800 font-bold rounded-lg m-10 mt-5 p-2 px-4' onClick={x}>Home</button>
    </div>
  </div>
    <MovieSuggestion movieData={id}></MovieSuggestion>
  </div>
  )
}

export default MovieDetails
