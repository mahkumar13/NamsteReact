import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom"
import Shimmer from './Shimmer';
import { menu_api } from '../Utils/constants';
import MenuList from './MenuList';

function ResturantMenu() {
    const [resInfo,setResInfo]=useState(null)

    const {resid}=  useParams()
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData= async ()=>{
        const data = await fetch(menu_api+resid);
        const json=  await data.json()
        console.log(json.data)
        setResInfo(json.data)
       
    }
    if(resInfo===null){
        return <Shimmer></Shimmer>
    }
    const {name,cuisines,costForTwoMessage,avgRating}= resInfo.cards[0].card.card.info
    //const {menuItems} = resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[1].info.name
    // console.log( resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[1].card.info.name)
    // console.log(resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
   // console.log(resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]
     // ?.card?.card?.itemCards[0]?.card?.info)
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


// import { useEffect,useState } from "react"
// import Shimmer from "./Shimmer"
// import { useParams } from "react-router-dom"
// import { MENU_API } from "./Utils/constants"
// function Restuarant(){
//     let [resinfo,setResInfo] = useState([])
//     let {id} = useParams()
//     useEffect(()=>async function fetchMenu(){
//         try{
//         let data = await fetch(MENU_API + id)
//         let json = await data.json()
//         console.log(json)
//         setResInfo(json?.data)
//         }
//         catch(e){
//             console.log(e)
//         }
//     },[])
//     if(resinfo?.length ===0) return <Shimmer />
//     else{
//     const {name,areaName,avgRating,cuisines} = resinfo?.cards[0]?.card?.card?.info; 
//     const menuItems= resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
//     console.log(menuItems)
//     return(
//         <div>
//             <h1>{name}</h1>
//             <p>{areaName}    ★{avgRating}</p>
//             <h4>{cuisines.join(',')}</h4>
//             <div className="menu-items">
//                 <h2>Recommanded </h2>
//                 {menuItems.map((a)=><p key={a.card.info.id}>{a?.card?.info?.name} -    ₹{a.card.info.defaultPrice/100|| a.card.info.price/100}</p>)}
//             </div>

//         </div>
//     )
//     }
// }
// export default Restuarant
