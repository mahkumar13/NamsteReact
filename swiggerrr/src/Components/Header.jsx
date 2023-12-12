 import { useState } from 'react'
import {LOGO_URL} from '../Utils/constants'
const Header= ()=>{

  const [buttonText,setButtonText]=useState("LogIn")
    return (
      <div className='header'>
      <div className='logo-container'>
      <img  className = "logo" src={LOGO_URL} alt='logo '></img>
      </div>
      <div className='nav-items'>
     <ul>
      <li>Home</li>
      <li>About Us</li>
      <li>Contact Us </li>
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