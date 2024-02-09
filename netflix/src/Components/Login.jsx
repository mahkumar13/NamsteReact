import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../Utils/Validate'
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from '../Utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../Utils/userSlice';
import { BACKGROUND_PHOTO, PHOTO_URL } from '../Utils/constant';
import photoURL from '../../src/imge/usericon.jpg'

const Login = () => {
    const [isSignInForm,setIsSignInForm]= useState(true)
    const [errorMessage,setErrorMessage]=useState(null)
    const dispatch= useDispatch()
    const email=useRef();
    const password= useRef()
    const name=useRef()
    const toggleForm= ()=>{
        setIsSignInForm(!isSignInForm)
    }
    const handleButtonClick = ()=>{
        // validate the form data 
        console.log(email.current.value);
        console.log(password.current.value)
      const msg=  checkValidData(email.current.value,password.current.value)
      setErrorMessage(msg)
      if(msg) return;
      if(!isSignInForm){
       // signup logic
       createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
         .then((userCredential) => {  
               const user = userCredential.user;
               updateProfile(user, {
                displayName:name.current.value , photoURL: photoURL
              }).then(() => {
                // Profile updated!
                // ...
                const {uid,email,displayName,photoURL} = auth.currentUser
                dispatch(
                  addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL})
                  )
                
              }).catch((error) => {
                // An error occurred
                // ...
                setErrorMessage(error.message)
              });
                  
           })
          .catch((error) => {
               const errorCode = error.code;
               const errorMessage = error.message;
                setErrorMessage(errorCode+"-"+errorMessage)
  });
      }
      else{
         // sign in logic 
         signInWithEmailAndPassword(auth, email.current.value, password.current.value)
         .then((userCredential) => {
           const user = userCredential.user;
            console.log(user)
         })
         .catch((error) => {
           const errorCode = error.code;
           const errorMessage = error.message;
           setErrorMessage(errorCode +""+errorMessage)
         });

      }
     
    }
  return (
    <div className=''>
     <Header></Header>
     <div>
    <img className='absolute'
        src={BACKGROUND_PHOTO}
    alt='' ></img>
    </div>
    <form onSubmit={(e)=>e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80' >
        <h1 className='text-3xl py-4'>{isSignInForm?"Sign In ":"SignUp"}</h1>
        {!isSignInForm &&
             <input ref={name} className='my-4 p-4 w-full bg-gray-800' type='text' placeholder='Full Name  '></input>
        }
       
        <input ref={email} className='my-4 p-4 w-full bg-gray-800' type='text' placeholder='Email Address '></input>
        <input ref={password} className='my-4 p-4 w-full bg-gray-800' type='password' placeholder='password'></input>
        <p className='text-red-600 font-bold m-4 text-lg'>{errorMessage}</p>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'
        onClick={handleButtonClick}
        >{isSignInForm?"Sign In ":"SignUp"}
        </button>
        <p className='py-4 w-full cursor-pointer' onClick={toggleForm} >
           {isSignInForm?"New to Netflix ? Sign up Now":"Already a user ? Sign in Now "}</p>
    </form>
   </div>   
   
  )
}

export default Login
