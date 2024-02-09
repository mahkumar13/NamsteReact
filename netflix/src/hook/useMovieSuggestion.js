import { useDispatch } from "react-redux";
import { API_OPTION } from "../Utils/constant";
import { useEffect } from "react";

export const useMovieSuggestion = (id)=>{
    const dispatch = useDispatch();
    const getMovieSuggestion= async()=>{
        const data= await fetch("https://api.themoviedb.org/3/movie/" +id+"/recommendations",API_OPTION)
        const json= await data.json()
        console.log(json)
    }

    useEffect(()=>{
       getMovieSuggestion()
    },[])
}