import React from 'react';
import { useState } from 'react';


import Cross from '../icons/Cross';
import Bars from '../icons/Bars';
import NavList from './NavList';




const Nav = () => {
    const [openNav, setOpenNav]=useState(false);


    function toggleNav (){
    
        setOpenNav((prevstat)=>!prevstat);
        const html = document.querySelector("html");
        html.classList.toggle("overflow-none");
    }
    let navStyle ="";
    if(openNav){
        navStyle="nav-open";
   
    }
  return (
<React.Fragment>

<div className="nav-cont margin-b-m ">
       <p className="logo"> home cinema</p>
       <button className="nav-btn" onClick={toggleNav}>
           {openNav?  <Cross></Cross> :<Bars/>}

     
            
        </button>
        {openNav?
        <nav className={`nav ${navStyle}`}>
     
       
     <NavList ismobile="true" onToggle={toggleNav}/>
 </nav>
  :false

        }

<nav className="nav">
     
       
    <NavList ismobile="false" />
 </nav>



      
        
        </div>
</React.Fragment>
  
  );
}

export default Nav;