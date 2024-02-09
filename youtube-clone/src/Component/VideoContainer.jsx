import React, { useEffect, useState } from 'react'
import { YOUTUBE_URL } from '../Utils/constant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
const VideoContainer = () => {
  const [videos,setVideos]= useState([])

  useEffect(()=>{
    getVideos();
  },[])

  const getVideos= async ()=>{
    const data = await fetch(YOUTUBE_URL)
    const json = await data.json()
    setVideos(json.items)
  }
  return (
    <div className='flex justify-between flex-wrap'>
      {videos.map((video)=>(
        <Link key={video.id} to={"/watch?v="+video.id}>
        <VideoCard  info={video}></VideoCard>
        </Link>
        
      ) )}
    </div>
  )
}

export default VideoContainer
