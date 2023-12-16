import React from 'react';
import {useParams} from "react-router-dom"
import Shimmer from './Shimmer';
import MenuList from './MenuList';
import useResturantMenu from '../Utils/useResturantMenu';

function ResturantMenu() {
    const {resid}=  useParams()
    const resInfo= useResturantMenu(resid)
    if(resInfo===null){
        return <Shimmer></Shimmer>
    }
    const {name,cuisines,costForTwoMessage,avgRating}= resInfo.cards[0].card.card.info
     const {itemCards}= resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
     console.log(itemCards)
  return (
    <div>
    <div className='menu'>
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h2>{costForTwoMessage}    </h2>
      <h3>  Rating - {avgRating} ⭐</h3>
      <h2>Menu List</h2>
      </div>
      <div className='menu-list' >
        {itemCards.map((item)=>
        <div key={item.card.info.id} className='menu-list'>
        <MenuList menuList={item}></MenuList>
        </div>
        )}
      </div>
    </div>
  )
}
export default ResturantMenu