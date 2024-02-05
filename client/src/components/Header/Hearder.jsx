import React, { useState } from "react";
import "./Hearder.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from 'react-outside-click-handler'
import { Link, NavLink } from "react-router-dom";


const Hearder = () => {
   
    const [MenuOpened,setMenuOpened] = useState(false)

    const getMenuStyle = (MenuOpened)=>{
        if(document.documentElement.clientWidth <= 800){
            return {right:!MenuOpened && "-100%" }
        }
    }

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerwidth h-container">
       <Link to="/">
        <img src="logo.png" alt="logo" width={100} />
       </Link>

        <OutsideClickHandler onOutsideClick={()=>setMenuOpened(false)}>
        <div className="flexCenter h-menu"
        style={getMenuStyle(MenuOpened)}>
          <Link to='/properties'>Properties</Link>
          
          <a href="mailto:mehrinmuhammed2001@gmail.com">Contact Us</a>
          
          <button className="button">
            <NavLink to='/login'>Login</NavLink>
          </button>
        </div>

        </OutsideClickHandler>
        <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Hearder;
