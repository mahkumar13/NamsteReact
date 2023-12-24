import { useContext, useEffect, useState } from "react"
import ResturantCard, { withOpenTag } from "./ResturantCard"
import Shimmer from "./Shimmer";
import {Link} from 'react-router-dom'
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";

const Body = () => {
  const [ListofResturant, setListOfResturant] = useState([]);
  const [TopRatedResturant, setTopRatedResturant] = useState([])
  const [FilterList, setFilterList] = useState([]);
  const [serachText, setSerachText] = useState("")
  const ResturantCardOpen = withOpenTag(ResturantCard)
  const {loggedInUser,setUserName} = useContext(UserContext)

  useEffect(() => {
    fetchData();
  }, [])
  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6034084&lng=77.3782031&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
   console.log(json.data)
    setListOfResturant(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants)
     setFilterList(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants)
  }
  const onlineStatus= useOnlineStatus();
  if(onlineStatus===false){
    return <h1>Looks like you are offline </h1>
  }
  if (ListofResturant.length === 0) {
    return (
      <Shimmer></Shimmer>
    )
  }

  return (
    <div className="bg-yellow-50">
      <div className="flex justify-between px-2 py-2">
        <div className="px-72 m-4 p-4">
          <input type="text" className="border border-solid border-black rounded-lg w-64" placeholder="" value={serachText}
            onChange={(e) => setSerachText(e.target.value)}
          ></input>
          <button className=" mx-6 w-64 py-2 bg-green-300  rounded-lg"
            onClick={() => {
              const filterList = ListofResturant.filter((res) =>
                res.info.name.toLowerCase().includes(serachText.toLowerCase())
              )
              setFilterList(filterList)
            }}
          > Serach</button>
       <label>UserName:</label>
       <input type="text" className="border border-solid border-black rounded-lg w-64" placeholder="" value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
        <div>
        <button className="px-4 py-3 bg-green-300 m-4 rounded-lg items-center"
          onClick={() => {
            const filterList = ListofResturant.filter(
              (res) => res.info.avgRating > 4
            );
            // setTopRatedResturant(filterList)
            // setListOfResturant(filterList)
            setFilterList(filterList)
          }
          }
        >TOP RATED Resturant</button>
        </div>
        
      </div>
      <div className="flex justify-between mx-3 flex-wrap rounded-lg">
        {FilterList.map(res =>(
        <Link  className="flex" key={res.info.id} to={"/resturant/"+res.info.id}>
          {res.info.isOpen ? (<ResturantCardOpen resList={res}></ResturantCardOpen>):
          (<ResturantCard  resList={res} > </ResturantCard>)}
          </Link>
        ))}
      </div>
    </div>

  )
}

export default Body