import { useEffect,useState } from "react"
import { menu_api } from '../Utils/constants';
const useResturantMenu= (resid)=>{

    const [resInfo,setResInfo]=useState(null)
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async()=>{
       const data = await fetch(menu_api+ resid)
       const json = await data.json()
       setResInfo(json.data)
    };
    return resInfo
}
export default useResturantMenu