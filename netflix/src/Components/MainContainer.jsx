import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackGround from './VideoBackGround'
import VideoTitle from './VideoTitle'

const MainContainer = () => {
    const movies= useSelector(store=>store.movies?.nowPlayingMovies)

    if(movies===null) return ;   //early return 
   
    const mainMovie= movies[1]
    const {original_title, overview,id} = mainMovie
  //   console.log(id)
  //  console.log(movies)
  return (
    <div>
        <VideoTitle title={original_title} overview={overview}></VideoTitle>
     <VideoBackGround id={id}></VideoBackGround>
    </div>
  )
}

export default MainContainer
