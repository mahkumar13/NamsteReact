import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const isMenuOpen= useSelector((store)=>store.app.isMenuOpen)
    console.log(isMenuOpen)

    if(!isMenuOpen) return null
  return (
    <div className='p-5 shadow-lg w-48 border bg-black text-white font-bold'>
      <ul className='text-white'>
        <Link to="/"><li>Home 🏡</li></Link>
        
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live </li>
      
      </ul>
      <h1 className='font-bold text-lg'>Subscription </h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Movie</li>
        <li>Gaming</li>
      </ul>
      <h1 className='font-bold text-lg'>You</h1>
      <ul>
        <li>Your Channel</li>
        <li>History</li>
        <li>Your Videos</li>
        <li>Watch later</li>
      </ul>
    </div>
  )
}

export default Sidebar
