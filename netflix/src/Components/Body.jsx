import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import {createBrowserRouter,Outlet,RouterProvider} from 'react-router-dom'
import SignUp from './SignUp'
import MovieDetails from './MovieDetails'
import Check from './Check'
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
      path:"watch",
      element:<Check></Check>
    },
    // {
    //   path:"watch2/:id",    /// we can do it by passing id from route 
    //   element:<Check></Check>
    // }
    
])
const Body = () => {
  return (
    <div>
     <RouterProvider router={appRouter}>
      <Outlet></Outlet>
     </RouterProvider>
    </div>
  )
}

export default Body
