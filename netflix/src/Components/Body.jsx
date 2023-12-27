import React from 'react'
import Login from './Login'
import Browse from './Browse'
import {BrowserRouter,createBrowserRouter,RouterProvider} from 'react-router-dom'
const appRouter= createBrowserRouter([
    {
       path:"/",
       element:<Login></Login> 
    },
    {
        path:"/browse",
        element:<Browse></Browse>
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
