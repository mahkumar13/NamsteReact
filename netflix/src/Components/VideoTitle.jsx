import React from 'react'

const VideoTitle = ({overview,title}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div className=''>
        <button className='bg-white p-4 font-bold px-12 text-lg  text-black rounded-lg hover:bg-opacity-70'>▶️ Play</button>
        <button className='bg-white px-10 p-4 m-4 text-lg  text-black rounded-lg font-bold hover:bg-opacity-70'> ℹ️More Info </button>
      </div>
    </div>
  )
}

export default VideoTitle
