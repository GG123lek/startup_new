import React from 'react'
import './Products.css'
import Navbar from '../Components/Navbar/Navbar'
import imgProduct from '../Assets/images/Banner.jpg'
import maty from '../Assets/images/Icon set.jpg'
import matoy from '../Assets/images/Icon set (1).jpg'
import matiy from '../Assets/images/Icon set (2).jpg'
import zesll from '../Assets/images/Group 1000004965.svg'
import stre1 from '../Assets/images/Store (7).jpg'
import stre2 from '../Assets/images/Store (8).jpg'
import Footer from './Footer'

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
        <button className='btn-cont' onClick={()=>{
          alert("lets go")
        }}>Explore products</button>
        </div>
        <img src={imgProduct} alt=''/>
      </div>
      <div className='ewz'>


       <div>
        <img src={maty} alt=''/>
        <p>Secure Payment</p>
        <h4>
          Payattitude ensure safe secure and convenience
              <br/>
          payment.
        </h4>
       </div> 
       <div>
        <img src={matiy} alt=''/>
        <p>Dedicated Support</p>
        <h4>
          Get help from our team of expert.
        </h4>
       </div>
       <div>
        <img src={matoy} alt=''/>
        <p>Privacy</p>
        <h4>
          We ensure safe and protection of your
              <br/>
          details
        </h4>
       </div>

    </div>
    <div className='flexout'>
      <div className='mi'>
        <h4 >
          Payattitude 
          <br/>
          Digital collection
          <br/>
          solution
        </h4>
      </div>
        <img src={zesll} alt=''/>
    </div>
         <div className='comer'>
          <div className='nvxx'>
            <p>What are you waiting for?</p>
            <h3>Get your new Payment Digital remote now!!</h3>
            <h4>Download app</h4>
            <div className='cd'>
            <img src={stre1} alt=''/>
            <img src={stre2} alt=''/>
            </div>
          </div>
         </div>
         
        
             
          <Footer/>
       
  </div>     
  )
}

export default Products
