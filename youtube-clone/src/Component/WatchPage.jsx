import React, { useEffect } from 'react'
import {useDispatch} from "react-redux"
import {closeMenu} from '../Utils/appSlice'
import {useParams,useSearchParams} from 'react-router-dom'
const WatchPage = () => {
  const [params]= useSearchParams()
  console.log(params.get("v"))
  const dispatch= useDispatch()
  useEffect(()=>{
    dispatch(closeMenu())
  })
  return (
    <div  className='px-2'>
      <iframe width="1200" height="500" 
      src={"https://www.youtube.com/embed/"+params.get("v")} title="YouTube video player" frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowFullScreen>

      </iframe>
    </div>
  )
}

export default WatchPage
