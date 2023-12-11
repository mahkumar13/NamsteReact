import { useState } from "react"
import resDataList from "../Utils/MockData"
import ResturantCard from "./ResturantCard"

const Body= ()=>{
  console.warn(resDataList)
   const [TopRatedResturant,setTopRatedResturant] =useState(resDataList)
    return(
    <div className="body">
     <div className="search">Search</div>
     <button className="btn" 
      onClick={()=>{
        const filterList= resDataList.filter(
          (res)=>res.info.avgRating>4
        );
        setTopRatedResturant(filterList)
      }
      }
     >TOP RATED Resturant</button>
     <div className="res-container"> 
      
      
      {TopRatedResturant.map(res=>
        <ResturantCard  key={res.info.id} resList={res} > </ResturantCard>)
      }
      
     </div>
    </div>
    )
  }
 
  export default Body