 import { useContext, useState } from 'react'
import {LOGO_URL} from '../Utils/constants'
import {Link} from 'react-router-dom'
import useOnlineStatus from '../Utils/useOnlineStatus'
import UserContext from '../Utils/UserContext'
import { useSelector } from 'react-redux'
const Header= ()=>{
  const [buttonText,setButtonText]=useState("LogIn")
  const {loggedInUser}= useContext(UserContext)
  console.log(loggedInUser)
  const onlineStatus= useOnlineStatus()
  const cartItems= useSelector((store)=> store.cart.items)
  console.log(cartItems)
    return (
      <div className="flex justify-between shadow-lg bg-red-100 text-slate-800 ">
      <div className='logo'>
      <img  className = "w-56" src={LOGO_URL} alt='logo '></img>
      </div>
      <div className="flex items-center">
     <ul className='flex p-3 m-3 '>
      <li className='px-4 font-bold text-2xl' >Online Status: {onlineStatus?"✅":"🔴"}</li>
     <li className='px-4 font-bold text-2xl' > <Link to="/">  Home</Link> </li>
      <li className='px-4 font-bold text-2xl'> <Link to="/about">  About Us</Link> </li>
      <li className='px-4 font-bold text-2xl'> <Link to="/contact">  Contact Us</Link> </li>
      <li className='px-4 font-bold text-2xl text-rose-700' >
        <Link to="/cart"> Cart ({cartItems.length} items)</Link>
       </li>
      <button onClick={()=>{
        buttonText==="LogIn"?setButtonText("LogOut"):setButtonText("LogIn")
       
      }}
      className=' text-xl rounded-lg items-center font-bold  bg-green-300 mx-4 w-20'>{buttonText}</button>
      <li className='px-4 font-bold text-2xl' >{loggedInUser}</li>
     </ul>
      </div>
      </div>
    )
  }
  export default Header