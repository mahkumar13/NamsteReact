import React from 'react';
import {useParams} from "react-router-dom"
import Shimmer from './Shimmer';
import MenuList from './MenuList';
import useResturantMenu from '../Utils/useResturantMenu';
import ResturantCategory from './ResturantCategory';

function ResturantMenu() {
    const {resid}=  useParams()
    const resInfo= useResturantMenu(resid)   // custom hook 
    if(resInfo===null){
        return <Shimmer></Shimmer>
    }
    const {name,cuisines,costForTwoMessage,avgRating}= resInfo.cards[0].card.card.info
     const {itemCards}= resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
     //console.log(itemCards)
     const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c)=>c.card?.["card"]?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
     );
  return (
    <div>
    <div className='text-center m-4  border bg-red-200 font-bold rounded-lg'>
      <h1 className='items-center '>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h2>{costForTwoMessage}    </h2>
      <h3>  Rating - {avgRating} ⭐</h3>
      </div>
      {categories.map((c)=>(
        <ResturantCategory data={c}></ResturantCategory>
      ))}
     
      {/* <div className='flex flex-wrap m-4 p-4' >
        {itemCards.map((item)=>
        <div key={item.card.info.id} className='menu-list'>
        <MenuList menuList={item}></MenuList>
        </div>
        )}
      </div> */}
    </div>
  )
}
export default ResturantMenu