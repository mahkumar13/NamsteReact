import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import PageNotFound from './Components/PageNotFound';
import Body from './Components/Body';
import ResturantMenu from './Components/ResturantMenu';
const root = ReactDOM.createRoot(document.getElementById('root'));
const appRouter= createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    children:[
     {
      path:"/",
      element:<Body></Body>
     },
     {
      path:"/about",
    element:<AboutUs></AboutUs>
     },
     {
      path:"/contact",
      element:<ContactUs></ContactUs>
    },
    {
      path:"/resturant/:resid",
      element:<ResturantMenu></ResturantMenu>
    }
    ],
    errorElement:<PageNotFound></PageNotFound>
  }
])
root.render(
  
    <RouterProvider router={appRouter}>
    </RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
