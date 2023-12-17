 import { useState } from 'react'
import {LOGO_URL} from '../Utils/constants'
import {Link} from 'react-router-dom'
import useOnlineStatus from '../Utils/useOnlineStatus'
const Header= ()=>{
  const [buttonText,setButtonText]=useState("LogIn")
  const onlineStatus= useOnlineStatus()
    return (
      <div className="flex justify-between shadow-lg bg-slate-500 text-white ">
      <div className='logo'>
      <img  className = "w-56" src={LOGO_URL} alt='logo '></img>
      </div>
      <div className="flex items-center">
     <ul className='flex p-3 m-3 '>
      <li className='px-4 font-bold text-2xl' >Online Status: {onlineStatus?"✅":"🔴"}</li>
     <li className='px-4 font-bold text-2xl' > <Link to="/">  Home</Link> </li>
      <li className='px-4 font-bold text-2xl'> <Link to="/about">  About Us</Link> </li>
      <li className='px-4 font-bold text-2xl'> <Link to="/contact">  Contact Us</Link> </li>
      <li className='px-4 font-bold text-2xl' >Cart</li>
      <button onClick={()=>{
        buttonText==="LogIn"?setButtonText("LogOut"):setButtonText("LogIn")
       
      }}
      className=' rounded-lg items-center'>{buttonText}</button>
     </ul>
      </div>
      </div>
    )
  }
  export default Header