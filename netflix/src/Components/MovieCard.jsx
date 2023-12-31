import React from 'react'
import { IMAGE_CDN } from '../Utils/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-4'>
      <img alt='' src={IMAGE_CDN+posterPath}
      >
      </img>
    </div>
  )
}

export default MovieCard
