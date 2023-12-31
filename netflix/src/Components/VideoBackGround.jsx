import React, { useEffect, useState } from 'react'

import useMoviesTrailers from '../hook/useMoviesTrailers'
import { useSelector } from 'react-redux'

const VideoBackGround = ({id}) => {
     //const [videoKey,setVideoKey]=useState(null)  // using usestate 
     const videoKey = useSelector(store=>store.movies?.trailerVideo?.key)  // using redux toolkit 
    const moviesTrailers= useMoviesTrailers(id)
 
  return (
    <div className='w-screen'>
      <iframe 
      className='w-screen aspect-video'
      src={"https://www.youtube.com/embed/"+videoKey+"?&autoplay=1&mute=1" }
      title="YouTube video player" frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
     ></iframe>
    </div>
  )
}

export default VideoBackGround
