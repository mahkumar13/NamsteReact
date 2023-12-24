 import {CDN_URL} from '../Utils/constants'
const ResturantCard= (props)=>{
    const data= props.resList.info
    
    return(
      <div className="m-4 p-4 w-[280px] h-[475px]  border border-red-900 rounded-lg">
        <img className="rounded-lg w-[250px] h-[200px]" 
        src={CDN_URL +
        data.cloudinaryImageId}
        alt="logo"> 
        </img>
        <h3 className='font-bold py-4 text-lg'>{data.name}</h3>
        <p>{data.cuisines.join(", ")}</p>
        <h3  className='font-bold  text-lg'>  {data.costForTwo}</h3>
        <h3>{data.avgRating} ⭐</h3>
  
      </div>
    )
  }
    // hIgher Order Component 
  export  const withOpenTag = (ResturantCard)=>{
    return (props)=>{
      return (
        <div>
        <label className='absolute m-2 p-2 rounded-lg bg-black text-white' > Top Rated  </label>
        <ResturantCard {...props}></ResturantCard>
        </div>
      )
    }
  }

  
  export default ResturantCard