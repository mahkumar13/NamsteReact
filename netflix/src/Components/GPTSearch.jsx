import React, { useRef } from 'react'
import { API_OPTION, BACKGROUND_PHOTO, SERACH_MOVIE_API } from '../Utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import lang from '../Utils/languageConstants'
import openai from '../Utils/openAI'
import { addGPTMoviesResult } from '../Utils/gptSerachSlice'
import MovieList from './MovieList'

const GPTSearch = () => {
  return (
    <div>
        <div>
        <img className='absolute -z-20'
        src={BACKGROUND_PHOTO}
    alt='' ></img>
    </div>
      <GPTSerachBar></GPTSerachBar>
      <GPTMovieSuggestion></GPTMovieSuggestion>
    </div>
  )
}
export default GPTSearch

export const  GPTSerachBar = ()=>{
  const dispatch = useDispatch()
  const langKey= useSelector(store=>store.appConfig.lang)
  const searchText= useRef()
  
 
    const handleSubmit= (e)=>{
        e.preventDefault()
    }
    // serach movie from tmdb api 
    const searchMovie= async (movie)=>{
        const data = await fetch( SERACH_MOVIE_API+movie+"&include_adult=false&language=en-US&page=1",API_OPTION)
        const json = await data.json()
        return json.results;
                 
    }
const handleGptSerach=  async()=>{
 // console.log(searchText.current.value)
 // make an api call to open ai api 
 const query= "Acts as a movie recommendation system and suggest some movies for the  query :"
 + searchText.current.value +".only give me  name of 5 movies,comma  seperated like the example  result given ahed.exmaple result :Gadar, sholay,don,golmaal,koi mil gaya "
 
  const gptResult= await openai.chat.completions.create({
    messages: [{ role: 'user', content: query }],
    model: 'gpt-3.5-turbo',
  })
  
  const gptMovie= gptResult.choices[0]?.message?.content.split(",");
  const promiseArray= gptMovie.map((movie)=>searchMovie(movie))
  //searchMovie(searchText.current.value)
  const tmdbResult= await Promise.all(promiseArray)
  console.log(tmdbResult)
  dispatch(addGPTMoviesResult({movieNames:gptMovie,movieResult:tmdbResult}))
  
}
    return (
        <div className='pt-[20%]  flex justify-center'>
            <form className='bg-black grid grid-cols-12 w-1/2 '
            onSubmit={handleSubmit}
            >
                <input type='text ' placeholder={lang[langKey].gptPlaceHolder}
                className='m-4 p-4 col-span-9'
                ref={searchText}
                >
                </input>
                <button onClick={handleGptSerach}
                className='rounded-lg py-2 px-4 bg-red-700 text-white col-span-3 m-4'>{lang[langKey].search}</button>
            </form>
        </div>
    )

}

export const GPTMovieSuggestion = ()=>{
  const gpt= useSelector(store=>store.gpt)
   const {movieNames,movieResult}= gpt
   if(!movieResult) return null;

   return (
        <div className='text-white p-4 m-4'>
          <div>
           {movieNames.map((movie,index)=>(
            <MovieList key={movie}  title={movie} movies={movieResult[index]}></MovieList>
           ))}
          </div>

         </div>
   )
}
