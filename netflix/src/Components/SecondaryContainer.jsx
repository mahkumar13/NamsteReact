import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies=  useSelector(store=>store.movies)
  console.log(movies?.nowPlayingMovies)
 
  return (
    <div  className='bg-black'>
      <div className='-mt-500 relative pl-12 z-20'>
      <MovieList title={"Now playing"} movies={movies?.nowPlayingMovies}></MovieList>
      <MovieList title={"Popular"} movies={movies?.popularMovie}></MovieList>
      <MovieList title={"Top Rated Movie"} movies={movies?.topRatedMovie}></MovieList>
      <MovieList title={"Upcoming Movie"} movies={movies?.upcomingMovie}></MovieList>
      </div>
      
    </div>
  )
}

export default SecondaryContainer
