import { useEffect, useState } from "react"
import resDataList from "../Utils/MockData"
import ResturantCard from "./ResturantCard"
import Shimmer from "./Shimmer";

const Body= ()=>{
   const [ListofResturant,setListOfResturant]= useState([]);
   const [TopRatedResturant,setTopRatedResturant] =useState([])
   const [serachText,setSerachText]=useState("")

    useEffect(()=>{
        fetchData();
    },[])
    const fetchData=  async()=>{
      const data = await fetch(" https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6034084&lng=77.3782031&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
       const json=  await data.json();
       setListOfResturant(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants)

       console.log(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
        )
    }
    if(ListofResturant.length===0){
      return (
          <Shimmer></Shimmer>
      )
    }
    
    return(
    <div className="body">
      <div className="filter">
     <div className="search">Search
     
     <input type="text" className="search-box" placeholder="" value={serachText}
     onChange={(e)=>setSerachText(e.target.value)}
     ></input>
     <button  className="serach-btn"
       onClick={()=>{
         console.log(serachText)
       }}
     > Serach</button>
     </div>

     <button className="btn" 
      onClick={()=>{
        const filterList= ListofResturant.filter(
          (res)=>res.info.avgRating>4
        );
        setTopRatedResturant(filterList)
        setListOfResturant(filterList)
      }
      }
     >TOP RATED Resturant</button>
     </div>
     <div className="res-container"> 
      {ListofResturant.map(res=>
        <ResturantCard  key={res.info.id} resList={res} > </ResturantCard>)
      }
      
     </div>
    </div>
    
    )
  }
 
  export default Body