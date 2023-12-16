 import { useState } from 'react'
import {LOGO_URL} from '../Utils/constants'
import {Link} from 'react-router-dom'
import useOnlineStatus from '../Utils/useOnlineStatus'
const Header= ()=>{

  const [buttonText,setButtonText]=useState("LogIn")
  const onlineStatus= useOnlineStatus()
    return (
      <div className='header'>
      <div className='logo-container'>
      <img  className = "logo" src={LOGO_URL} alt='logo '></img>
      </div>
      <div className='nav-items'>
     <ul>
      <li>Online Status: {onlineStatus?"✅":"🔴"}</li>
     <li> <Link to="/">  Home</Link> </li>
      <li> <Link to="/about">  About Us</Link> </li>
      <li> <Link to="/contact">  Contact Us</Link> </li>
      <li>Cart</li>
      <button onClick={()=>{
        buttonText==="LogIn"?setButtonText("LogOut"):setButtonText("LogIn")
       
      }}
      className='login'>{buttonText}</button>
     </ul>
      </div>
      </div>
    )
  }
  export default Header