import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { toggleMenu } from '../Utils/appSlice'
import { GOOGLE_SUGGESTION_API } from '../Utils/constant'
import store from '../Utils/Store'
import { cacheResult } from '../Utils/searchSlice'
const Header = () => {
  const [searchQuery,setSearchQuery]= useState("")
  const [suggestion,setSuggestion]= useState([])
  const [showSuggestion,setShowSuggestion]= useState(false )
 const dispatch= useDispatch()
  const searchCache= useSelector(store=>store.search)
  const toggleMenuHandler= ()=>{
    dispatch(toggleMenu())
  }

  useEffect(()=>{
    const timer= setTimeout(()=>
    {
      if(searchCache[searchQuery]){
        setSuggestion(searchCache[searchQuery])
      }
      else{
        getAutoSuggesytion()
      }
    },200)
    return ()=> {clearTimeout(timer)};
  },[searchQuery])

  const getAutoSuggesytion= async()=>{
    const data= await fetch(GOOGLE_SUGGESTION_API+searchQuery)
    const json= await data.json()
    setSuggestion(json[1])
    dispatch(cacheResult({
      [searchQuery]:json[1]
    }))
    console.log(json[1])
  }
  console.log(searchQuery)
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex col-span-1' >
        <img className='h-10 cursor-pointer ' alt='hamburger'  onClick={()=>toggleMenuHandler()}
        src='https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp'></img>
        <img className='h-10 mx-2 cursor-pointer' alt='youtube' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png'></img>
      </div>
      <div className='col-span-10 mx-96'>
        <div>
        <input className='w-1/2 border border-gray-400 rounded-l-2xl p-2' type='text '
        onFocus={()=>setShowSuggestion(true)}
        onBlur={()=>setShowSuggestion(false)}
         onChange={(e)=>setSearchQuery(e.target.value)}
        ></input>
        <button className=' border border-gray-400 rounded-r-2xl p-2'>Search</button>
        </div>
        {showSuggestion && 
        <div className='absolute bg-white  py-2 px-5 w-[24.5rem] rounded-lg shadow-2xl  border border-gray-400'>
          <ul>
            {
            suggestion.map(s=> <li key={s} className='py-2 hover:bg-gray-100'>{s}</li>)
            }
          </ul>
        </div>
        }
      </div>
      <div className='col-span-1'>
        <img className='h-10' src='https://cdn-icons-png.flaticon.com/512/9131/9131529.png' alt='userlogo'></img>
      </div>
    </div>

  )
}

export default Header
