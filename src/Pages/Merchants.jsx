import React, { useState } from 'react'
import './Merchants.css'
import Navbar from '../Components/Navbar/Navbar'
import Footer from './Footer'
import pictures from '../Assets/images/NICK.jpg'
import photos from '../Assets/images/dalls.jpg'
import checkImg from '../Assets/images/mark.jpg'
import lastIMG from '../Assets/images/Store (5).jpg'
import firstIMG from '../Assets/images/Store (6).jpg'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import MerchantForm from './MerchantForm'


function Merchants() {
   
    const [createMerchant, setCreateMerchant] = useState(false)
    const [isFormOpen, setIsFormOpen] = useState(true);

  return (
   <>
   {createMerchant && <MerchantForm closeForm={setCreateMerchant}/>}
   <div>
      {isFormOpen && <MerchantForm closeForm={setIsFormOpen} />}
    </div>
   <Navbar/>
   
   <div className='pa-cont'>
        <div>
        <h1>Become a Merchant</h1>
        <p>
        Payattitude  is a simple user friendly and cost effective way of providing
        <br/> 
        secured banking services such as Cash deposit and Cash withdrawal to 
        <br/>
        groups of people in a community.
        </p>
        <button style={{cursor:'pointer'}} className='pa-btn'
         onClick={()=>{
            setCreateMerchant(true)
        }}>Become a Merchant</button>
        </div>
        <img src={pictures} alt=''/>
      </div>
      <div className='tex-cent'>
       <h1>Mobile Phone as POS</h1>
        <p>
         Businesses that cannot afford to incur additional costs of POS have the opportunity to use their mobile 
         <br/>
         phones as POS with Payattitude Digital app installed on their devices, Your phone becomes your POS where they can 
         <br/>
         send payment requests to customers and your customers in turn get notified and approve payment immediately.
        </p>
      </div>


      <div className='text-div'>
        <div>
        <img src={photos} alt=''/>
        </div>
        <div className='weat'>
        <div className='checkbox'>
         <p style={{color:'rgba(245, 130, 32, 1)', fontSize:'20px', margin:'10px', fontWeight:'bold'}}>How to receive payment on Mobile phone </p>
         <p><img src={checkImg} alt=''/>Step 1-Log into the app</p>
         <p><img src={checkImg} alt=''/>Step 2-Click on the account to transact with</p>
         <p><img src={checkImg} alt=''/>Step 3-Select request transfer/payment</p>
         <p><img src={checkImg} alt=''/>Step 4-Enter amount enter description.</p>
         <p><img src={checkImg} alt=''/>Step 5-Click add payer to enter phone no of the sender or click on the profile<br/>icon to load your contact list and send request</p>
        </div> 
         
        <div className='checkbox'>
        <p style={{color:'rgba(245, 130, 32, 1)', fontSize:'20px', margin:'10px', fontWeight:'bold'}}>How to approve payment on POS terminal</p>
        <p><img src={checkImg} alt=''/>A notification message is sent to the payer</p>
        <p><img src={checkImg} alt=''/>Step 1-Tap on notification</p>
        <p><img src={checkImg} alt=''/>Step 2-Select account to debit</p>
        <p><img src={checkImg} alt=''/>Step 3-Enter PIN and approve</p>
        <p><img src={checkImg} alt=''/>Receipt is printed out (if holder approves transaction)</p>
        </div>
       </div> 
       </div>

      <div className='tex-cent'>
       <h1>Payment on POS with just<br/>phone number</h1>
       <p>
       Merchants will be able to receive payments by entering customers’ phone number with amount on POS and
       <br/>
       customer/payer receives a notification on his/her mobile phone for prompt authorization. Upon authorization, POS 
       <br/>
       display an approve message.
       </p>
      </div>


       
       <div className='text-div2'>
       <div>
        <img src={photos} alt=''/>
       </div>
       <div className='weat'>
        <div className='checkbox'>
         <p style={{color:'rgba(245, 130, 32, 1)', fontSize:'20px', margin:'10px', fontWeight:'bold'}}>How to make payment on POS terminal</p>
         <p><img src={checkImg} alt=''/>Step 1-Select Payattitude</p>
         <p><img src={checkImg} alt=''/>Step 2-Select account type</p>
         <p><img src={checkImg} alt=''/>Step 3-Input amount and phone number linked to account</p>
         <p><img src={checkImg} alt=''/>Notification is sent to holder’s phone Number</p>
        </div> 
        <div className='checkbox'>
        <p style={{color:'rgba(245, 130, 32, 1)', fontSize:'20px', margin:'10px', fontWeight:'bold'}}>How to approve payment on POS terminal</p>
        <p><img src={checkImg} alt=''/>A notification message is sent to the payer</p>
        <p><img src={checkImg} alt=''/>Step 1-Tap on notification</p>
        <p><img src={checkImg} alt=''/>Step 2-Select account to debit</p>
        <p><img src={checkImg} alt=''/>Step 3-Enter PIN and approve</p>
        <p><img src={checkImg} alt=''/>Receipt is printed out (if holder approves transaction)</p>
        </div>
       </div>
       </div>

       <div className='tex-cent'>
         <h1>Payment on cash register with<br/>just phone number</h1>
         <p>
         Merchants can now be set up remotely and the merchant can log-in from the cashier's work station or personal 
         <br/>
         devices to accept payment from customers. Merchant or payee enters buyer or payer's phone number on the cash 
         <br/>
         register or work station and the buyer or payer is prompted on her/his own device to approve or decline. Customer 
         <br/>
         approves payment and successful transaction message is displayed on the cash register.  
         </p>
       </div>


      <div className='text-div3'>
      <div>
        <img src={photos} alt=''/>
      </div>
      <div className='weat'>
        <div className='checkbox'>
         <p style={{color:'rgba(245, 130, 32, 1)', fontSize:'20px', margin:'10px', fontWeight:'bold'}}>How to receive payment on cash register</p>
         <p><img src={checkImg} alt=''/>Step 1-Log into the portal</p>
         <p><img src={checkImg} alt=''/>Step 2-Input phone number and amount</p>
         <p><img src={checkImg} alt=''/>Step 3-Input description (Optional)</p>
         <p><img src={checkImg} alt=''/>Step 4-Click on submit</p>
        </div> 
        <div className='checkbox'>
        <p style={{color:'rgba(245, 130, 32, 1)', fontSize:'20px', margin:'10px', fontWeight:'bold'}}>How to approve payment on POS terminal</p>
        <p><img src={checkImg} alt=''/>A notification message is sent to the payer</p>
        <p><img src={checkImg} alt=''/>Step 1-Tap on notification</p>
        <p><img src={checkImg} alt=''/>Step 2-Select account to debit</p>
        <p><img src={checkImg} alt=''/>Step 3-Enter PIN and approve</p>
        <p><img src={checkImg} alt=''/>Receipt is printed out (if holder approves transaction)</p>
        </div>
      </div>
      </div>
      
        
      <div className='tex-list'>
        <h1>List of Merchant</h1>
        </div>
        <div className='tfv'>
        <div className='table-div'>
        <table className='table'>
        <thead>
            <th>
              S/NO
            </th>
            <th>
              MERCHANT NAME
            </th>
            <th>
              MERCHANT LOCATION
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
              <td>89 OGUNLANA DRIVE,SURULERE</td>
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
            <img src={lastIMG} alt=''/>
            <img src={firstIMG} alt=''/>
            </div>
            </div>
          </div>
          <Footer/>
         </div>
         
        
          
   </>
  )
}

export default Merchants
