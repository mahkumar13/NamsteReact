
import { useContext, useEffect, useState } from 'react';
import './App.css';
import AboutUs from './Components/AboutUs';
import Body from './Components/Body';
import Header from './Components/Header';
 import {Outlet} from 'react-router-dom'
import UserContext from './Utils/UserContext';
import {Provider} from "react-redux"
import appStore from './Utils/appStore';
function App() {
  const [userName,setUserName]= useState()
  const {loggedInUser} = useContext(UserContext)
  useEffect(()=>{
    const data = {
      name:"Mahendra "
    };
    setUserName(data.name)
  },[])
  

  return (
    <Provider store={appStore}>
   <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
    <div className="App">
      <Header></Header>
      <Outlet></Outlet>
    </div>
    </UserContext.Provider>
    </Provider>
  );
}

export default App;
