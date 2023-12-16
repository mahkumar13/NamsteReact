import React from 'react'
import {CDN_URL} from '../Utils/constants'
function MenuList({menuList}) {
  return (
    <div className='menu-item'>
      <h3>{menuList.card.info.name}</h3>
      <h4> Price:₹ {menuList.card.info.price /100  || menuList.card.info.defaultPrice/100}</h4>
      <img src={CDN_URL+menuList.card.info.imageId} style={{height:"150px",width:"100%"}}></img>
    </div>
  )
}

export default MenuList
