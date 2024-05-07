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
import uiuximg from '../Assets/images/front.jpg'
import tope from '../Assets/images/b2c.jpg'
import { FiArrowUpRight } from "react-icons/fi";

import './Home.css'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <div className='ui'>
        <div>
        <h1>Manage all your bank<br/>account from one<br/>secure</h1>
        <p className='lo'>One secure platform to pay,get paid and manage<br/>
        your finance better and with ease</p>
        <img src={taw} alt=''/>
        <img src={naw} alt=''/>
        <div>
        <img src={uaw} alt=''/>
        <img src={ham} alt='' className='yam'/>
        </div>
        </div>
        <img src={caw} alt='' className='op'/>
        </div>
        
       <div className='raw'>
        <p>Solutions</p>
        <h3>Simple,reliable, and secure payment<br/> possibilities – powered by your phone number</h3>
        <h5>Enjoy consistent transaction security, ease, and access to your funds with<br/> our all-inclusive payment platform built to power your lifestyle.</h5>
       </div>

   <div className='payment'>
       <div className='kam'>
         <div className='dam' style={{borderLeft:"5px solid orange"}}>
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
      <img src={tags}alt=''className='nbra'/>
      <p>1</p>
      <h3>ATM</h3>
       <span>
        withdraw cash and transact seamlessly on the
        ATM with just your phone number
       </span>
    </div>
    <div className='contents'>
      <img src={stags} alt='' className='caxm'/>
      <p>2</p>
      <h3>Pos</h3>
      <span>
        Make withdrawals at any POS locations
        using your phone number
      </span>
    </div>
    <div className='contents'>
      <img src={mtags} alt=''className='klzt'/>
      <p>3</p>
      <h3>Merchant</h3>
      <span>
        Pay conveniently with your phone number at any
        Merchant location 
      </span>
    </div>
    <div>
    <div className='contents'>
      <img src={mtags} alt=''className='klzt'/>
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
      <img src={mtags} alt=''className='klzt'/>
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
      <img src={mtags} alt=''className='klzt'/>
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
         <p>Colllection with phone number</p>
         <h5>
          Offerings,tithe and contributions can now be
          <br/>
          collected easily with just a number
        </h5>
        </div>

        <div>
        <img src={uiuximg} alt=''/>
        <p>Colllection with phone number</p>
         <h5>
          Offerings,tithe and contributions can now be
          <br/>
          collected easily with just a number
        </h5>
        </div>
        <div>
        <img src={uiuximg} alt=''/>
        <p>Colllection with phone number</p>
         <h5>
          Offerings,tithe and contributions can now be
          <br/>
          collected easily with just a number
        </h5>
        </div>
     </div>
         <div className='teal'>
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
        <p>Colllection with phone number</p>
         <h5>
          Offerings,tithe and contributions can now be
          <br/>
          collected easily with just a number
          </h5>
         </div>
         <div>
         <img src={uiuximg} alt=''/>
        <p>Colllection with phone number</p>
         <h5>
          Offerings,tithe and contributions can now be
          <br/>
          collected easily with just a number
        </h5>
       </div>
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
          </div>
          </div>
        

        </div>
        </div>
        <div className='uj'>
          <h3>Here`s what our customers about us</h3>
        </div>
    </div> 
  )
}

export default Home
