import React from 'react'
import Navbar from  '../Components/Navbar/Navbar'
import './Contact Us.css'
import ctIM from '../Assets/images/Frame 1000005389 (2).svg'
import STcon from '../Assets/images/Icon set.svg'
import STkm from '../Assets/images/Icon set (1).svg'
import STrz from '../Assets/images/Icon set (2).svg'
import formsIM from '../Assets/images/Image.svg'
import Footer from './Footer'
function Contact () {
    return (
      <>
      <Navbar/>

      <div className='ctST'>
        <div>
        <h4>Contact Us</h4>
        <h1>
          Let us here from you,
          <br/>
          We are here fully to
          <br/>
          help you
        </h1>
        <p>You can reach us at <span >customerservice@payattitude.com</span></p>
        </div>
        <div>
          <img src={ctIM} alt=''/>
        </div>
      </div>
      
      <div className='ctSM'>
        <div className='jbl'>
          <h5>Get Help and Support</h5>
          <h3>
            If you have a specific service or question in mind,please
            <br/>
             dont hesitate to contact us</h3>
          <p>Reach out to us via the following channels</p>
        </div>
        <div className='rotter'>
          <div>
          <img src={STcon}alt=''/>
          <h1>Address</h1>
          <p>3, Idowu Taylor street, Victoria Island,Lagos, Nigeria.</p>
          </div>
          <div>
            <img src={STkm} alt=''/>
            <h1>Phone Numbers</h1>
            <p>020-1-22728700700-Payattitude (070072928848833)+234 902 068 2250(Whatsapp)</p>
          </div>
          <div>
            <img src={STrz} alt=''/>
            <p>customerservice@payattitude.com</p>
          </div>
        </div>
      </div>
      
      <div className='forms'>
          <img src={formsIM} alt=''/>
       <div>
       <div className='msg'>

<div>
 <h3>Contact Us</h3>
 <h1>Send us a message</h1>
 <p>our friendly team will love to hear from you</p>
</div>
<div>
<div className='alal'>
 <div>
<p>First name</p>
<input name='' placeholder='First name'/>
 </div>
 <div>
 <p>Last name</p>
 <input name='' placeholder='Last name'/>
 </div>
</div>
</div>

<div className='fego'>
 <p>Email</p>
 <input name='' placeholder='you@company.com'/>
</div>
<div className='uego'>
 <p>Phone Number</p>
 <input name='' placeholder='+234(81)000-0000'/>
</div>
<div className='jego'>
 <p>Message</p>
 <textarea name='' placeholder=''/>
 <div className='check'>

 <input type='checkbox'/>
 <p>you agree to our friendly privacy policy</p>
 </div>
 <button onClick={()=>{alert('hey dear')}}>Submit</button>
</div>
</div>
</div>
</div>
       <Footer/>
      </>
    )
  }
export default Contact;