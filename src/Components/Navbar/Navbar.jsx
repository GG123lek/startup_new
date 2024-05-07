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
                <p className='load'>Home</p>
                </NavLink>
                <NavLink to="/product" >
                <p>Products</p>
                </NavLink>
                <NavLink to="/partners" >
                  <p>Partners</p>
                </NavLink>
                <NavLink to="/company">
                <p>Company</p>
                </NavLink>
                <NavLink to="/resources">
                <p>Resources</p>
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
