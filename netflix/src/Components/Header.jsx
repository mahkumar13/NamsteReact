import React, { useEffect } from 'react'
import { auth } from '../Utils/firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";
import {useNavigate,} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { addUser, removeUser } from '../Utils/userSlice';
import { NETFLIX_LOGO } from '../Utils/constant';
const Header = () => {
  const navigate= useNavigate()
  const user= useSelector(store=>store.user)
  const dispatch= useDispatch()
 
  useEffect(()=>{
    const unSubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const {uid,email,displayName,photoURL} = user
        dispatch(
          addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL})
          );
        navigate("/browse")
      } else {
        // User is signed out
         dispatch(removeUser())
         navigate("/")
      }
    });
    // unsubcribe when component is unmount 
    return ()=>unSubscribe()
  },[])

  const handleSignOut= ()=>{
    signOut(auth).then(() => {
     
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
      <img  className='w-44'
       src={NETFLIX_LOGO} alt='netlix logo'>
       </img>
       {user &&(
       <div className='flex'>
        <img  className='w-12 h-12 mx-4 m-4'
        src={user?.photoURL} alt='user'>
        </img>
        <button onClick={handleSignOut} className='font-bold text-white '>Sign Out</button>
       </div>
        )}
    </div>
  )
}

export default Header
