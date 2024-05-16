import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import './Company.css'
import pics1 from '../Assets/images/Picture (1).svg'
import compPic from '../Assets/images/Frame 1000005395.svg'
import compPics from '../Assets/images/Frame 1000005393.svg'
import newPics from '../Assets/images/Frame 1000005394.svg'
import compG from '../Assets/images/_Team member.svg'
import compP from '../Assets/images/_Team member (1).svg'
import compR from '../Assets/images/_Team member (2).svg'
import compZ from '../Assets/images/_Team member (3).svg'
import compQ from '../Assets/images/_Team member (4).svg'
import compD from '../Assets/images/_Team member (5).svg'
import stre1 from '../Assets/images/Store (5).jpg'
import stre2 from '../Assets/images/Store (6).jpg'
import Footer from './Footer'

const Company = () => {
  return (
    <div>
     <Navbar/>
     <div className='company'>
      <div>
      <h1>
        We are commited to 
        <br/>
        Making payment easier
      </h1>
      <p>Enhancing commerce and lifestyle through innovative solutions</p>
      </div>
      <img src={pics1} alt=''/>
     </div>
     
     <div className='text-company'>
      <p>
        Payattitude is a Payment Scheme with innovative technologies for payments and financial transactions with focus on mobile and digital payments.
        <br/> 
        Payattitude is owned by a consortium of leading Nigerian banks. Payattitude Global was incorporated and granted license in 2013 by the Central
        <br/> 
        Bank of Nigeria (CBN) to operate as a payment scheme. Payattitude Global is the owner of the registered trademark Payattitude®, Person to Person 
        <br/>
        with a patent granted in Nigeria in 2017 with the associated pay-off line Pay With<br/> Just Phone Number®.
        Payattitude owns the patent for the innovative Technology and Process that enables phone number to be used for different transactions available 
        <br/>
        across all channels ATM, POS and WEB. These transactions are approved or authorized from ONLY the personal devices of the holder/customer of 
        <br/>
        the Payattitude bank/partner. As one of the major players in the Payment Industry, Payattitude is introducing this innovative and convenient payment 
        <br/>
        option as another major contribution and added value to the payment industry.<br/></p>
     </div>
     
     <div className='all-pics'>
      <div>
        <img src={compPic} alt=''/>
      </div>
      <div>
      <img src={compPics} alt=''/>
      </div>
      <div>
        <img src={newPics} alt=''/>
      </div>
     </div>
     
     <div className='text3'>
      <h4>Directors</h4>
      <h1>Meet our board of directors</h1>
      <p>Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers
        <br/>
         you to do you best work.</p>
     </div>
      <div>
        <div className='compDirect'>
          <img src={compG} alt=''/>
          <img src={compP} alt=''/>
          <img src={compR} alt=''/>
          <img src={compZ} alt=''/>
          <img src={compQ} alt=''/>
          <img src={compD} alt=''/>
        </div>
        <div className='qaty'>
          <div className='nvxx'>
            <p>What are you waiting for?</p>
            <h3>Get your new Payment Digital remote now!!</h3>
            <h4>Download app</h4>
            <div>
            <img src={stre1} alt='' style={{width:"170px"}}/>
            <img src={stre2} alt=''style={{width:"170px"}}/>
            </div>
          </div>
         </div>
         <Footer/>
      </div>
    </div>
  )
}

export default Company
