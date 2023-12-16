
import './App.css';
import AboutUs from './Components/AboutUs';
import Body from './Components/Body';
import Header from './Components/Header';
 import {Outlet} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
