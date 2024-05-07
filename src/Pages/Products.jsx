import React from 'react'
import './Products.css'
import Navbar from '../Components/Navbar/Navbar'
import imgProduct from '../Assets/images/Banner.jpg'


const Products = () => {
  return (
    
<div>
      <Navbar/>
      <div className='ui'>
        <div>
        <h1>Building an innovative<br/>for the unbanked</h1>
        <p className='lo'>
          A description about our products comes here. A description
         <br/>
         about our products comes here.A description about our
         <br/>
         products comes here
        </p>
        <button className='btn-cont'>Explore products</button>
        </div>
        <img src={imgProduct} alt=''/>
      </div>
  </div>

  )
}

export default Products
