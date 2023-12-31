import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hook/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovie from '../hook/usePopularMovie'
import useTopRatedMovies from '../hook/UseTopRatedMovies'
import useUpcomingMovie from '../hook/useUpcomingMovie'
const Browse = () => {
 const nowPlayingMovies = useNowPlayingMovies() // custom hook calling 
 const popularMovie= usePopularMovie()
 const topRatedMovies= useTopRatedMovies()
 const upcomingMovie= useUpcomingMovie()
  return (
    <div>
      <Header></Header>
      <MainContainer></MainContainer>
      <SecondaryContainer></SecondaryContainer>
    </div>
  )
}

export default Browse
