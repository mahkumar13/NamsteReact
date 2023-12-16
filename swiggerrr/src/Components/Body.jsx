import { useEffect, useState } from "react"
import ResturantCard from "./ResturantCard"
import Shimmer from "./Shimmer";
import {Link} from 'react-router-dom'
import useOnlineStatus from "../Utils/useOnlineStatus";

const Body = () => {
  const [ListofResturant, setListOfResturant] = useState([]);
  const [TopRatedResturant, setTopRatedResturant] = useState([])
  const [FilterList, setFilterList] = useState([]);
  const [serachText, setSerachText] = useState("")

  useEffect(() => {
    fetchData();
  }, [])
  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6034084&lng=77.3782031&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    const x = json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
    console.log(x)
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
    <div className="body">
      <div className="filter">
        <div className="search">Search

          <input type="text" className="search-box" placeholder="" value={serachText}
            onChange={(e) => setSerachText(e.target.value)}
          ></input>
          <button className="serach-btn"
            onClick={() => {
              const filterList = ListofResturant.filter((res) =>
                res.info.name.toLowerCase().includes(serachText.toLowerCase())
              )
              setFilterList(filterList)
            }}
          > Serach</button>
        </div>

        <button className="btn"
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
      <div className="res-container">
        {FilterList.map(res =>(
        <Link  className="link" key={res.info.id} to={"/resturant/"+res.info.id}>
          <ResturantCard  resList={res} > </ResturantCard>
          </Link>
        ))}
      </div>
    </div>

  )
}

export default Body