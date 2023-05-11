import Footer from "./components/layout/Footer";
import Nav from "./components/layout/Nav";


import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Outlet/>
      <Footer/>
      
    </div>
  )
}

export default App
