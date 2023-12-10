 import {CDN_URL} from '../Utils/constants'
const ResturantCard= (props)=>{
    const data= props.resList.info
    
    return(
      <div className="res-card">
        <img className="img-food" 
        src={CDN_URL +
        data.cloudinaryImageId}
        alt="logo"> 
        </img>
        {/* <h3>{props.resList[0].info.avgRating}</h3>
        <h4>{data.cuisines.join(", ")}</h4>
        <h4>4.4 Ratings</h4>
        <h4>38Min Delivery</h4> */}
        <h3>{data.name}</h3>
        <p>{data.cuisines.join(", ")}</p>
        <h3>$ {data.costForTwo}</h3>
        <h3>{data.avgRating} ⭐</h3>
  
      </div>
    )
  }

  
  export default ResturantCard