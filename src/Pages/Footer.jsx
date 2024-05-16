import React from 'react'
import ftko from "../Assets/images/image 515 (1).svg";
import mkto from '../Assets/images/ri_twitter-x-fill.svg';
import bkto from '../Assets/images/Social icon.svg'
import lkto from '../Assets/images/Social icon (2).svg'
import ukto from '../Assets/images/Social icon (3).svg'
import zklo from '../Assets/images/Group 1000004223.svg'
import nklo from '../Assets/images/Frame 1000004224.svg'
import pkolo from '../Assets/images/Vector.svg'
import './Footer.css'
function Footer() {
  return (
    <div>
          <div className='topfooter'>
         <div className='footer'>
          <div className='logo'>
            <img src={ftko} alt=''/>
            <div className='socials'>
              <img src={mkto}alt=''/>
              <img src={bkto} alt=''/>
              <img src={lkto} alt=''/> 
              <img src={ukto} alt=''/>
            </div>
          </div>



           <div >
            <p>Company</p>
            <p>About Us</p>
            <p>FAQs</p>
           </div>
           <div >
            <p>Legal</p>
            <p>Privacy Policy</p>
            <p></p>
           </div>
          
          <div className='contactus'>
              <p>Contact us</p>
              <div className='contact'>
                <img src={zklo} alt=''/>Customerservice@payattitude.com
              </div>
              <div className='contact'>
              <img src={nklo} alt=''/>+23412704705
              </div>
              <div className='contact'>
                <img src={pkolo} alt=''/>3,idowu Taylor street,Victoria island,Lagos
             </div>  
          </div>
         </div>
         <hr />
      <p style={{padding:"10px", color:"white"}}>© 2023 Payattitude. All rights reserved.</p>
         </div>
    </div>
  )
}

export default Footer
