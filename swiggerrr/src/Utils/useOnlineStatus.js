import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

const useOnlineStatus= ()=>{
       const [onlineStatus,setOnlineStatus]= useState(true)
  useEffect(()=>{
    window.addEventListener("offline",()=>{
      setOnlineStatus(false)
    });
    window.addEventListener("online",()=>{
     setOnlineStatus(true)
    })

  },[])
  return onlineStatus
}
export default useOnlineStatus