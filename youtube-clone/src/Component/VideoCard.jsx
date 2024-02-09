import React from 'react'

const VideoCard = ({info}) => {
    //console.log(info)
    const {snippet,statistics} = info
    const{thumbnails,title,channelTitle }= snippet
  return (
    <div className='p-2 m-5 w-72 h-[400px] shadow-2xl' >
      <img className='rounded-lg' src={thumbnails.high.url} alt="thambnail" />
      <ul>
        <li className='font-bold py-3'>{title}</li>
        <li>{channelTitle}</li>
        <li> Views :{ statistics.viewCount} 🪟🪟</li>
        <li> Likes:{statistics.likeCount}👍 </li>
      </ul>
    </div>
  )
}

export default VideoCard
