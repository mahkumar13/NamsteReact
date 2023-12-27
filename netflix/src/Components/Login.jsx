import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm,setIsSignInForm]= useState(true)
    const toggleForm= ()=>{
        setIsSignInForm(!isSignInForm)
    }
  return (
    <div className=''>
     <Header></Header>
     <div>
    <img className='absolute'
        src='https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg'
    alt='' ></img>
    </div>
    <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80' >
        <h1 className='text-3xl py-4'>{isSignInForm?"Sign In ":"SignUp"}</h1>
        {!isSignInForm &&
             <input className='my-4 p-4 w-full bg-gray-800' type='text' placeholder='Full Name  '></input>
        }
        {!isSignInForm &&
             <input className='my-4 p-4 w-full bg-gray-800' type='number' placeholder='Mobile Number  '></input>
        }
        <input className='my-4 p-4 w-full bg-gray-800' type='text' placeholder='Email Address '></input>
        <input className='my-4 p-4 w-full bg-gray-800' type='password' placeholder='password'></input>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm?"Sign In ":"SignUp"}</button>
        <p className='py-4 w-full cursor-pointer' onClick={toggleForm} >
           {isSignInForm?"New to Netflix ? Sign up Now":"Already a user ? Sign in Now "}</p>
    </form>
   </div>
   
  )
}

export default Login
