import React from 'react'
import{Link} from 'react-router-dom'
import MovieCard from './MovieCard'

function MovieList({title,movies}) {
    
  return (
    <div className='px-4 bg-black text-white'>
         <h1 className='text-3xl font-bold py-2'>{title}</h1>
      <div className='flex overflow-x-scroll scrollbar-hide'>
        <div className='flex'>
            {
            movies?.map(movie=>(
            
            <MovieCard key={movie?.id} posterPath={movie?.poster_path}></MovieCard>
          
            ))} 
        </div>
      </div>
    </div>
  )
}

export default MovieList
