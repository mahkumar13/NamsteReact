import React from 'react'
import { IMAGE_CDN } from '../Utils/constant'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return (
    <div className='w-48 pr-4'>
    <img src='https://admin.itsnicethat.com/images/5J_S-ncPddZpVIrUyWB0NIRr_Q4=/51843/format-webp%7Cwidth-1440/5530f20a5c3e3c10580020b4.png' alt=''>
    </img>

    </div>
  )
  else{
  return (
    <div className='w-48 pr-4'>
      <img alt='' src={IMAGE_CDN+posterPath}
      >
      </img>
    </div>
  )
  }
}

export default MovieCard
