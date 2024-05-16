import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import the from '../../Assets/images/image 515 (1).jpg'



const Navbar = () => {
  return (
    <>
    
        <div className='nav-content'>
          <img src={the} alt='' />
          <div className='navlinks'>
                <NavLink to="/" >
                <p style={{color:window.location.pathname === "/" ? "orange":"", borderBottom:window.location.pathname === "/" ? "1px solid orange":""}}>Home</p>
                </NavLink>
                <NavLink to="/product" >
                <p style={{color:window.location.pathname === "/product" ? "orange":"", borderBottom:window.location.pathname === "/product" ? "1px solid orange":""}}>Products</p>
                </NavLink>
                <NavLink to="/partners" >
                  <p style={{color:window.location.pathname === "/partners" ? "orange":"", borderBottom:window.location.pathname === "/partners" ? "1px solid orange":""}}>Partners</p>
                </NavLink>
                <NavLink to="/company">
                <p style={{color:window.location.pathname === "/company" ? "orange":"", borderBottom:window.location.pathname === "/company" ? "1px solid orange":""}}>Company</p>
                </NavLink>
                <NavLink to="/resources">
                <p style={{color:window.location.pathname === "/resources" ? "orange":"", borderBottom:window.location.pathname === "/resources" ? "1px solid orange":""}}>Resources</p>
                </NavLink>
                </div>  
                <div className='nav-btn'>
                
                <button >Contacts</button> 
                </div> 
        </div>
    </>
  )
}

export default Navbar
