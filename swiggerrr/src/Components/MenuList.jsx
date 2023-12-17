import React from 'react'
import {CDN_URL} from '../Utils/constants'
function MenuList({menuList}) {
  return (
    <div className='m-4 p-4 w-[250px] h-[300px] border-rose-300 border-4 font-bold items-center hover:bg-gray-300 rounded-2xl' >
      <h3 className='m-4'>{menuList.card.info.name}</h3>
      <h4 className='m-3'> Price: ₹ {menuList.card.info.price /100  || menuList.card.info.defaultPrice/100}</h4>
      <img src={CDN_URL+menuList.card.info.imageId} style={{height:"150px",width:"100%"}}></img>
    </div>
  )
}

export default MenuList
