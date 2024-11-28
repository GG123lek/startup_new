import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import { useState } from 'react';
import partImg from '../Assets/images/Frame 1000005389.svg'
import digImg from  '../Assets/images/digital.svg'
import checkImg from '../Assets/images/_Checkbox base.svg'
import picChk from '../Assets/images/digital (1).svg'
import stre1 from '../Assets/images/Store (5).jpg'
import stre2 from '../Assets/images/Store (6).jpg'
import Footer from './Footer';
import './Partners.css'
import {  AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

import AgentForm from './AgentForm';

const Partners = () => {
  const navigate = useNavigate ();
  const [createMerchant, setCreateMerchant] = useState(false)
  return (
    <div>
      {createMerchant && <AgentForm closeForm={setCreateMerchant}/>}
      <Navbar/>
      <div className='pa-cont'>
        <div>
        <h1>Become an Agent</h1>
        <p>
        Payattitude  is a simple user friendly and cost effective way of providing
        <br/> 
        secured banking services such as Cash deposit and Cash withdrawal to 
        <br/>
        groups of people in a community.
        </p>
        <button className='pa-btn' onClick={()=>{
            setCreateMerchant(true)
        }}>Become an Agent</button>
        </div>
        <img src={partImg} alt=''/>
      </div>
      
      <div className='tex-cent'>
       <h1>About Agency Banking</h1>
       <p>Agency banking is a cost effective solution designed to provide financial access to the banked
          <br/>
           in locations with very few ATMs/Banks, unbanked and underbanked population.</p>
      </div>

      <div className='text-div'>
        <div>
        <img src={digImg} alt=''/>
        </div>
        <div className='checkbox'>
         <p><img src={checkImg} alt=''/>it creates employment opportunity for people</p>
         <p><img src={checkImg} alt=''/>Takes off stress of travelling far to bank branches on ATM or waiting on long ATM queues</p>
         <p><img src={checkImg} alt=''/>Deposit and withdrawal opportunity outside banking hours</p>
         <p><img src={checkImg} alt=''/>Opportunity to generate income.</p>
         <p><img src={checkImg} alt=''/>Easy on-boarding process</p>
        </div>
      </div>
      
      <div className='tex-chk'>
        <div className='chk-st'>
        <h5>How to become an agent</h5>
          <h4>
            Download the Payattitude Digital app and sign up as an agent,
            <br/>
            follow the process below.
          </h4>
            <p><img src={checkImg} alt=''/>Open PlayStore for Android or AppStore for iOS and search for “Payattitude Digital”</p>
            <p><img src={checkImg} alt=''/>Click on install and wait for the app to download and complete installation.</p>
            <p><img src={checkImg} alt=''/>Click on “Allow” If the question “Allow Payattitude to access this device” pops up.</p>
            <p><img src={checkImg} alt=''/>Click on open to access the app’s login page.</p>
            <p><img src={checkImg} alt=''/>Click on new user and follow the steps to link your account.</p>
            <p><img src={checkImg} alt=''/>Log into the app and select Payattitude Agent.</p>
            <p><img src={checkImg} alt=''/>“register as an agent” and click ok to complete registration.</p>
              <h5>Get the app<FaArrowRight /></h5>
            </div>
            <div>
              <img src={picChk} alt=''/>
            </div>
      </div>
      <div className='tex-list'>
        <h1>List of Agent</h1>
        </div>
        <div className='tfv'>
        <div className='table-div'>
        <table className='table'>
          <thead>
            <th>
              S/NO
            </th>
            <th>
              AGENT NAME
            </th>
            <th>
              AGENT LOCATION
            </th>
            <th>
              STATE
            </th>

          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>ABDULAZEEZ ABDULWAARITH</td>
              <td>111 ALLEN AVENUE IKEJA LAGOS</td>
              <td>LAGOS STATE</td>
            </tr>
            <tr>
              <td>2</td>
              <td>BABATUNDE MAYOWA</td>
              <td>SHOP 40, THE PALMS SHOPPING MALL, LEKKI, LAGOS</td>
              <td>LAGOS STATE</td>
            </tr>
            <tr>
              <td>3</td>
              <td>TUNDDE ALABI</td>
              <td>89 OGUNLANA DRIVE, SURULERE</td>
              <td>LAGOS STATE</td>
            </tr>
            <tr>
              <td>4</td>
              <td>SULEIMAN BADA</td>
              <td>ADEOLA ODEKU STREET, VICTORIA ISLAND, LAGOS</td>
              <td>LAGOS STATE</td>
            </tr>
            <tr>
              <td>5</td>
              <td>RASHEED RASHFORD</td>
              <td>ADEOLA ODEKU STREET, VICTORIA ISLAND, LAGOS</td>
              <td>LAGOS STATE</td>
            </tr>
          </tbody>
          <div className='button'>
            <p>Showing:<select><option>5</option></select>of 10</p>
            <div className='arrow'>
              <AiOutlineLeft/>
              <button>1</button>
              <button>2</button>
              <AiOutlineRight/>
            </div>
          </div>
          </table>
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
          
          </div>

        
          
  
   
  )
}

export default Partners
