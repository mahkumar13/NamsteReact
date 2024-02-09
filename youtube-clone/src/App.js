import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Body from './Component/Body';
import {Provider} from 'react-redux'
import store from './Utils/Store';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import MainContainer from './Component/MainContainer';
import WatchPage from './Component/WatchPage';
 
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Body></Body>,
    children:[
      {
        path:"/",
        element:<MainContainer></MainContainer>
      },
      {
        path:"/watch",
        element:<WatchPage></WatchPage>
      }
    ]
  }
])
function App() {
  return (
    <Provider store={store}>
    <div >
      <Header></Header>
      <RouterProvider router={appRouter}>  
      </RouterProvider>
    </div>
    </Provider>
  );
}

export default App;
