import React from 'react'
import logo from './../../Assets/logo.png'
import "./Nav.css";


const Nav=()=>{
    return(
        <div className="nav-container">
            <div className="nav-left">
            <img className="flash-logo" src={logo} alt="logo"/>
            <p className="flash-logo-text">FlashType</p>
         </div>
         <div className="nav-right">
             <a href="https://github.com/Digvijaysingh0707" target="_blank"
             className="nav-link"
             rel="noreferrer">
             Check Out!
                 
             </a>
         </div>
        </div>
    )
}
export default Nav;