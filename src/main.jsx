import React from 'react'
import ReactDOM from 'react-dom/client'
import './scss/main.scss';
import {RouterProvider,createBrowserRouter} from "react-router-dom";
import App from './App';
import Error from './pages/Error';
import Home from './pages/Home';
import Contact from "./pages/Contact";
import Search from "./pages/Search";

const routes = createBrowserRouter([
  {
    path:'/',
element:<App/>,
errorElement:<Error/>,
children:[
  {index:true,
  element:<Home/>
},{
  path:'/contact',
  element:<Contact/>
},{
  path:'/search',
  element:<Search/>
}

]
}]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes}>

<React.StrictMode>

    <App />
    </React.StrictMode>


  </RouterProvider>
);
