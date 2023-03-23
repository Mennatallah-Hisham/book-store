import React from 'react'
import ReactDOM from 'react-dom/client'
import './scss/main.scss';
import {RouterProvider,createBrowserRouter} from "react-router-dom";
import App from './App';
import Error from './pages/Error';
import Home from './pages/Home';
import Contact from "./pages/Contact";

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
}]
}]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes}>

<React.StrictMode>

    <App />
    </React.StrictMode>


  </RouterProvider>
);
