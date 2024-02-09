import React, { useEffect } from 'react'
import { API_OPTION } from '../Utils/constant'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

const MovieSuggestion = ({data}) => {
  console.log()
  const params= useParams()
  const {id} =params
  console.log(id)
    const dispatch = useDispatch();
    const getMovieSuggestion= async()=>{
        const data= await fetch("https://api.themoviedb.org/3/movie/"+id+"/recommendations",API_OPTION)
        const json= await data.json()
        console.log(json)
    }
    useEffect(()=>{
        getMovieSuggestion()
     },[])
  return (
    <div>
      
    </div>
  )
}

export default MovieSuggestion
