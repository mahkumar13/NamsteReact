import resDataList from "../Utils/MockData"
import ResturantCard from "./ResturantCard"

const Body= ()=>{
    return(
    <div className="body">
     <div className="search">Search</div>
     <div className="res-container"> 
      
      
      {resDataList.map(res=>
        <ResturantCard  key={res.info.id} resList={res} > </ResturantCard>)
      }
      
     </div>
    </div>
    )
  }
 
  export default Body