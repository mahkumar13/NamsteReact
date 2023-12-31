import React from 'react'
import { BACKGROUND_PHOTO } from '../Utils/constant'
import { useSelector } from 'react-redux'
import lang from '../Utils/languageConstants'

const GPTSearch = () => {
  return (
    <div>
        <div>
        <img className='absolute -z-20'
        src={BACKGROUND_PHOTO}
    alt='' ></img>
    </div>
      <GPTSerachBar></GPTSerachBar>
      <GPTMovieSuggestion></GPTMovieSuggestion>
    </div>
  )
}

export default GPTSearch

export const  GPTSerachBar = ()=>{
  const langKey= useSelector(store=>store.appConfig.lang)
  console.log(lang[langKey].search)
    const handleSubmit= (e)=>{
        e.preventDefault()
    }

    return (
        <div className='pt-[20%]  flex justify-center'>
            <form className='bg-black grid grid-cols-12 w-1/2 '
            onSubmit={handleSubmit}
            >
                <input type='text ' placeholder={lang[langKey].gptPlaceHolder}
                className='m-4 p-4 col-span-9'
                >
                </input>
                <button className='rounded-lg py-2 px-4 bg-red-700 text-white col-span-3 m-4'>{lang[langKey].search}</button>
            </form>
        </div>
    )

}

export const GPTMovieSuggestion = ()=>{

}
