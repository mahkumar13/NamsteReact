import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import SignUp from './SignUp'
const appRouter= createBrowserRouter([
    {
       path:"/",
       element:<Login></Login> 
    },
    {
        path:"/browse",
        element:<Browse></Browse>
    },
    {
      path:"/moviedetails",
      element:<SignUp></SignUp>
    }
])
const Body = () => {
  return (
    <div>
     <RouterProvider router={appRouter}>
     </RouterProvider>
    </div>
  )
}

export default Body
