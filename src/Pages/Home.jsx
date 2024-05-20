import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import caw from '../Assets/images/Image (3).jpg'
import taw from '../Assets/images/Store (3).jpg'
import naw from '../Assets/images/Store (4).jpg'
import ham from '../Assets/images/Over 1k+ downloads.jpg'
import uaw from '../Assets/images/Group 1000004962.jpg'
import vtq from '../Assets/images/Picture (3).jpg'
import tags from '../Assets/images/Picture (4).jpg'
import stags from '../Assets/images/Picture (5).jpg'
import mtags from '../Assets/images/Picture (6).jpg'
import ktags from '../Assets/images/Picture (8).jpg'
import ptags from '../Assets/images/Picture (9).jpg'
import utags from '../Assets/images/Picture (10).jpg'
import uiuximg from '../Assets/images/front.jpg'
import tope from '../Assets/images/b2c.jpg'
import maty from '../Assets/images/Icon set.jpg'
import matiy from '../Assets/images/Icon set (1).jpg'
import matoy from '../Assets/images/Icon set (2).jpg'
import bjar from '../Assets/images/Image (4).jpg'
import maaa from  '../Assets/images/Store (5).jpg'
import baaa from '../Assets/images/Store (6).jpg'
import jaaa from '../Assets/images/iPhone 14 Mockups.jpg'
import { FiArrowUpRight } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import './Home.css'
import Footer from './Footer'

const Home = () => {
  return (
    <>
    <div>
        <Navbar/>
        <div className='ui'>
        <div>
        <h1>Manage all your bank<br/>account from one<br/>secure</h1>
        <p className='lo'>One secure platform to pay,get paid and manage<br/>
        your finance better and with ease</p>
         <div className='homeP'>
        <img src={taw} alt=''/>
        <img src={naw} alt=''/>
        </div>
        <div>
        <img src={uaw} alt='' className='mild'/>
        <img src={ham} alt='' className='yam'/>
        </div>
        </div>
        <img  src={caw} alt='' className='op'/>
        </div>
        
       <div className='raw'>
        <p>Solutions</p>
        <h3>Simple,reliable, and secure payment<br/> possibilities – powered by your phone number</h3>
        <h5>Enjoy consistent transaction security, ease, and access to your funds with<br/> our all-inclusive payment platform built to power your lifestyle.</h5>
       </div>

   <div className='payment'>
       <div className='kam'>
         <div className='dam' >
           <h1>Payattitude Digital</h1>
           <p>Our trendy, smart and convenient payment platform enables users 
            to use just their phone numbers for transactions at the ATM,
             web, POS and at merchant
            locations.<span>Explore<FiArrowUpRight className='mab'/> </span> </p>
         </div>
         <div className='dam'>
           <h1>Payattitude Digital Collection Solution</h1>
           <p>Simplified collection solution for contributions,
             dues and offerings; get anyone to pay you easily,
              using their phone number.<span>Explore<FiArrowUpRight className='pop'/></span></p>
         </div>
         <div className='dam'>
           <h1>Payattitude Corporate</h1>
           <p>End-to-end secure and convenient payment solution that 
            enables corporates to
           extend their services to, 
           and get paid by the unbanked.
           <span>Explore<FiArrowUpRight className='lvw'/></span></p>
         </div>
       </div>
           <img src={vtq} alt=''/>

   </div>
   <div className='payment-pics'>
     <p>How it works</p>
     <h3>Bringing financial services closer
         <br/>
         to you via USSD and mobile app
     </h3>
     <h5>
      Payattitude empowers person to person operations with just
      <br/>
      phone number, via USSD and mobile app
     </h5>
   </div>
   <div className='containerPics'>

    <div className='contents'>
      <img src={tags}alt=''/>
      <p>1</p>
      <h3>ATM</h3>
       <span>
        withdraw cash and transact seamlessly on the
        ATM with just your phone number
       </span>
    </div>
    <div className='contents'>
      <img src={stags} alt='' />
      <p>2</p>
      <h3>Pos</h3>
      <span>
        Make withdrawals at any POS locations
        using your phone number
      </span>
    </div>
    <div className='contents'>
      <img src={mtags} alt=''/>
      <p>3</p>
      <h3>Merchant</h3>
      <span>
        Pay conveniently with your phone number at any
        Merchant location 
      </span>
    </div>
    <div>
    <div className='contents'>
      <img src={ktags} alt=''/>
      <p>4</p>
      <h3>Web</h3>
      <span>
        Complete your web transactions with ease,check
        out with your phone number 
      </span>
    </div>
    </div>
    <div>
    <div className='contents'>
      <img src={ptags} alt=''/>
      <p>5</p>
      <h3>Person-2-Person(P2P)</h3>
      <span>
        Send and receive money conveniently using your 
        phone number
      </span>
    </div>
    </div>
    <div>
    <div className='contents'>
      <img src={utags} alt=''/>
      <p>6</p>
      <h3>Agency</h3>
      <span>
        Withdraw from any POS agent with just your
        phone number
      </span>
    </div>
    </div>
   </div>
   <div className='hover'>
       <div className='uiux'>
             <p>Features</p>
             <h3>An all-new payment control</h3>
        </div>
      <div className='real'>
        <div>
         <img src={uiuximg} alt=''/>
         <p>Collection with phone number</p>
         <h5>
          Offerings,tithe and contributions can now be
          <br/>
          collected easily with just a number
        </h5>
        </div>

        <div>
        <img src={uiuximg} alt=''/>
        <p>Send Payment Request</p>
         <h5>
          Request for payment/transfer from family
          <br/>
          and friends just using phone number.
        </h5>
        </div>
        <div>
        <img src={uiuximg} alt=''/>
        <p>Receive Payment Requests</p>
         <h5>
          Receive and securely authorize payment/transfer
          <br/>
          request from friends and family from your mobile phone
        </h5>
        </div>
        <div>
         <img src={uiuximg} alt=''/>
        <p>Link All your Account</p>
         <h5>
          Customers can link as many accounts in
          <br/>
          different banks to their PayAttitude Digital app.
         </h5>
          </div>
          <div>
         <img src={uiuximg} alt=''/>
        <p>ATM Withdrawals with Phone Number</p>
         <h5>
          Send friends,family and staff to withdraw
          <br/>
          cash at the ATM with just a phone number
          </h5>
         </div>
         <div>
         <img src={uiuximg} alt=''/>
        <p>Secure Transactions</p>
         <h5>
          Perform highly secure online transactions
          <br/>
          with your phone and a 6 digit pin
        </h5>
       </div>
     </div>
         <div className='teal'>
      
      
      
       </div>
       </div>
        <div className='ty'>
        <div className='spetnaz'>
          <div className='gsg'>
               <p>Benefits</p>
               <h3>You can do more with just your mobile phone</h3>
          </div>
        </div>
        <div className='bg'>
          <img src={tope} alt=''/>
          <div>
          <div className='tm'>
          <h3>
           Use your phone as POS
          </h3>
          <p>
          Businesses that cannot afford to incur additional costs for<br/>
          POS have the opportunity to use their mobile phones as<br/>
          POS with PayAttitude Digital app installed on their devices.
          </p>
          <br/>
          <h4 className='dwn'>Learn More<FaArrowRight  className='tic'/></h4>
          </div>
          </div>
        

        </div>
        </div>
        <div className='uj'>
          <h3>Why PayAttitude</h3>
          <p>
            Building an innovative
            <br/> 
            solution for the unbanked
          </p>
          <h4>
          We provide a seamless solution that allow businesses to effortlessly
          <br/>
          accept and send funds through your phone number
          </h4>
          
        </div>
    </div>
  <div className='ewz'>


       <div>
        <img src={maty} alt=''/>
        <p>Track your Spending</p>
        <h4>
          Get accurate and detailed digital receipts for every
          transactions to help keep track of your spending
        </h4>
       </div> 
       <div>
        <img src={matiy} alt=''/>
        <p>Track your Spending</p>
        <h4>
          Get accurate and detailed digital receipts for every
          transactions to help keep track of your spending
        </h4>
       </div>
       <div>
        <img src={matoy} alt=''/>
        <p>Track your Spending</p>
        <h4>
          Get accurate and detailed digital receipts for every
          transactions to help keep track of your spending
        </h4>
       </div>

    </div>
               <div className='mpaq'>
                <p>Here's what our customers say about us </p>
                </div>  

        
                <div>
                  
                
 <div className='gafr'>
      <img src={bjar} alt='' />
      <div className='processing'>

         <p >
         “Love the simplicity of the service and
          <br/>
          the prompt customer support. We can’t
          <br/> 
          imagine working without it.”
      
         </p>
         <div className='flexouting'>

      <div className='c-dot'>
          
          </div>
      <div className='r-dot'>
          
          </div>
      <div className='v-dot'>
          
          </div>
         </div>
         <p className='tsaw'>ifeanyi Okoli</p>
         <h3 className='colw'>Chief Digital Designer,HopeBank</h3>
      </div>
      </div>
         
         <div className='down-pic'>
           <div >
            <p>Join 100+ people who transact with</p>
            <h3>Payattitude</h3>
            <img src={maaa} alt=''/>
            <img src={baaa} alt=''/>
            </div>
              <div>
              <img src={jaaa} alt=''/>
              </div>
         </div>
          <Footer/>
         {/* <div className='topfooter'>
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
         </div> */}
      
                
      </div>
  </> 
  )
}

export default Home
