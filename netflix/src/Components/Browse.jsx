import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hook/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovie from '../hook/usePopularMovie'
import useTopRatedMovies from '../hook/UseTopRatedMovies'
import useUpcomingMovie from '../hook/useUpcomingMovie'
import GPTSearch from './GPTSearch'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
const Browse = () => {
 const nowPlayingMovies = useNowPlayingMovies() // custom hook calling 
 const popularMovie= usePopularMovie()
 const topRatedMovies= useTopRatedMovies()
 const upcomingMovie= useUpcomingMovie()
 const showGptSerach= useSelector(store=>store.gpt.showGptSerach)
  return (
    <div>
      <Header></Header>
      {
        showGptSerach  ? (<GPTSearch></GPTSearch>):
      <>
       <MainContainer></MainContainer>
       <Outlet></Outlet>
      <SecondaryContainer></SecondaryContainer>
      </>
    }
    </div>
  )
}

export default Browse
