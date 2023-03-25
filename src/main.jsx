import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider,createBrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import './scss/main.scss';
import store from './store/Store';
import App from './App';
import Error from './pages/Error';
import Home from './pages/Home';
import Contact from "./pages/Contact";
import Search from "./pages/Search";
import Shop from"./pages/Shop";
import ViewBook from"./pages/ViewBook";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";


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
,{
  path:'/shop',
  element:<Shop/>
}
,{
  path:'/book',
  element:<ViewBook/>
}
,{
  path:'/wishlist',
  element:<Wishlist/>
}
,{
  path:'/cart',
  element:<Cart/>
}

]
}]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes}>

<React.StrictMode>
<Provider store={store}>
<App />
</Provider>
  
    </React.StrictMode>


  </RouterProvider>
);
