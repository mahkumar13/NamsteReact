import React from 'react'
import ButtonList from './ButtonList'

const Button = ({name}) => {
  return (
    <div>
     <button className='bg-slate-300 px-5 py-2 rounded-lg m-2'>{name}</button>
    </div>
  )
}

export default Button
