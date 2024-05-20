import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { CiSearch } from "react-icons/ci";
import './Resources.css'
import resou from '../Assets/images/Frame 1000005389 (1).svg'
import stre1 from '../Assets/images/Avatar group.svg'
import Footer from './Footer'

const Resources = () => {
  const Questions = [
    {
      question:"What is Payattitude",
      icon:<svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.3763 13.4169V23.8336M11.168 18.6253H21.5846M29.3971 18.6253C29.3971 25.8165 23.5675 31.6461 16.3763 31.6461C9.18509 31.6461 3.35547 25.8165 3.35547 18.6253C3.35547 11.4341 9.18509 5.60443 16.3763 5.60443C23.5675 5.60443 29.3971 11.4341 29.3971 18.6253Z" stroke="#F58220" stroke-width="2.60417" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,
    },
    {
      question:"What are the types Payattitude",
      icon:<svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.3763 13.4169V23.8336M11.168 18.6253H21.5846M29.3971 18.6253C29.3971 25.8165 23.5675 31.6461 16.3763 31.6461C9.18509 31.6461 3.35547 25.8165 3.35547 18.6253C3.35547 11.4341 9.18509 5.60443 16.3763 5.60443C23.5675 5.60443 29.3971 11.4341 29.3971 18.6253Z" stroke="#F58220" stroke-width="2.60417" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,
    },
    {
      question:"What is Payattitude DebitPlus",
      icon:<svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.3763 13.4169V23.8336M11.168 18.6253H21.5846M29.3971 18.6253C29.3971 25.8165 23.5675 31.6461 16.3763 31.6461C9.18509 31.6461 3.35547 25.8165 3.35547 18.6253C3.35547 11.4341 9.18509 5.60443 16.3763 5.60443C23.5675 5.60443 29.3971 11.4341 29.3971 18.6253Z" stroke="#F58220" stroke-width="2.60417" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,
    },
    {
      question:"What is Payattitude PrepaidPlus",
      icon:<svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.3763 13.4169V23.8336M11.168 18.6253H21.5846M29.3971 18.6253C29.3971 25.8165 23.5675 31.6461 16.3763 31.6461C9.18509 31.6461 3.35547 25.8165 3.35547 18.6253C3.35547 11.4341 9.18509 5.60443 16.3763 5.60443C23.5675 5.60443 29.3971 11.4341 29.3971 18.6253Z" stroke="#F58220" stroke-width="2.60417" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,
    },
    {
      question:"What is Payattitude form Factor(Tag)?",
      icon:<svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.3763 13.4169V23.8336M11.168 18.6253H21.5846M29.3971 18.6253C29.3971 25.8165 23.5675 31.6461 16.3763 31.6461C9.18509 31.6461 3.35547 25.8165 3.35547 18.6253C3.35547 11.4341 9.18509 5.60443 16.3763 5.60443C23.5675 5.60443 29.3971 11.4341 29.3971 18.6253Z" stroke="#F58220" stroke-width="2.60417" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,
    },
    {
      question:"What is Payattitude Digital Version",
      icon:<svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.3763 13.4169V23.8336M11.168 18.6253H21.5846M29.3971 18.6253C29.3971 25.8165 23.5675 31.6461 16.3763 31.6461C9.18509 31.6461 3.35547 25.8165 3.35547 18.6253C3.35547 11.4341 9.18509 5.60443 16.3763 5.60443C23.5675 5.60443 29.3971 11.4341 29.3971 18.6253Z" stroke="#F58220" stroke-width="2.60417" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,
    },
    {
      question:"What type of financial transactions can I do with Payattitude®?",
      icon:<svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.3763 13.4169V23.8336M11.168 18.6253H21.5846M29.3971 18.6253C29.3971 25.8165 23.5675 31.6461 16.3763 31.6461C9.18509 31.6461 3.35547 25.8165 3.35547 18.6253C3.35547 11.4341 9.18509 5.60443 16.3763 5.60443C23.5675 5.60443 29.3971 11.4341 29.3971 18.6253Z" stroke="#F58220" stroke-width="2.60417" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,
    },
    {
      question:"What are the benefits of Payattitude Digital?",
      icon:<svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.3763 13.4169V23.8336M11.168 18.6253H21.5846M29.3971 18.6253C29.3971 25.8165 23.5675 31.6461 16.3763 31.6461C9.18509 31.6461 3.35547 25.8165 3.35547 18.6253C3.35547 11.4341 9.18509 5.60443 16.3763 5.60443C23.5675 5.60443 29.3971 11.4341 29.3971 18.6253Z" stroke="#F58220" stroke-width="2.60417" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,
    },
    {
      question:"What do I need to do to start using my Payattitude® Digital?",
      icon:<svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.3763 13.4169V23.8336M11.168 18.6253H21.5846M29.3971 18.6253C29.3971 25.8165 23.5675 31.6461 16.3763 31.6461C9.18509 31.6461 3.35547 25.8165 3.35547 18.6253C3.35547 11.4341 9.18509 5.60443 16.3763 5.60443C23.5675 5.60443 29.3971 11.4341 29.3971 18.6253Z" stroke="#F58220" stroke-width="2.60417" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,
    },
    {
      question:"How can I get the Payattitude application?",
      icon:<svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.3763 13.4169V23.8336M11.168 18.6253H21.5846M29.3971 18.6253C29.3971 25.8165 23.5675 31.6461 16.3763 31.6461C9.18509 31.6461 3.35547 25.8165 3.35547 18.6253C3.35547 11.4341 9.18509 5.60443 16.3763 5.60443C23.5675 5.60443 29.3971 11.4341 29.3971 18.6253Z" stroke="#F58220" stroke-width="2.60417" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,
    },
    {
      question:"Can I have a Wallet on the Digital application?",
      icon:<svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.3763 13.4169V23.8336M11.168 18.6253H21.5846M29.3971 18.6253C29.3971 25.8165 23.5675 31.6461 16.3763 31.6461C9.18509 31.6461 3.35547 25.8165 3.35547 18.6253C3.35547 11.4341 9.18509 5.60443 16.3763 5.60443C23.5675 5.60443 29.3971 11.4341 29.3971 18.6253Z" stroke="#F58220" stroke-width="2.60417" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,
    },
    
    {
      question:"Will Payattitude Digital application work on my phone?",
      icon:<svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.3763 13.4169V23.8336M11.168 18.6253H21.5846M29.3971 18.6253C29.3971 25.8165 23.5675 31.6461 16.3763 31.6461C9.18509 31.6461 3.35547 25.8165 3.35547 18.6253C3.35547 11.4341 9.18509 5.60443 16.3763 5.60443C23.5675 5.60443 29.3971 11.4341 29.3971 18.6253Z" stroke="#F58220" stroke-width="2.60417" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,
    },
    {
      question:"What is an account nickname?",
      icon:<svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.3763 13.4169V23.8336M11.168 18.6253H21.5846M29.3971 18.6253C29.3971 25.8165 23.5675 31.6461 16.3763 31.6461C9.18509 31.6461 3.35547 25.8165 3.35547 18.6253C3.35547 11.4341 9.18509 5.60443 16.3763 5.60443C23.5675 5.60443 29.3971 11.4341 29.3971 18.6253Z" stroke="#F58220" stroke-width="2.60417" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,
    },
    {
      question:"What is activation code?",
      icon:<svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.3763 13.4169V23.8336M11.168 18.6253H21.5846M29.3971 18.6253C29.3971 25.8165 23.5675 31.6461 16.3763 31.6461C9.18509 31.6461 3.35547 25.8165 3.35547 18.6253C3.35547 11.4341 9.18509 5.60443 16.3763 5.60443C23.5675 5.60443 29.3971 11.4341 29.3971 18.6253Z" stroke="#F58220" stroke-width="2.60417" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,
    },
    {
      question:"What is my Password?",
      icon:<svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.3763 13.4169V23.8336M11.168 18.6253H21.5846M29.3971 18.6253C29.3971 25.8165 23.5675 31.6461 16.3763 31.6461C9.18509 31.6461 3.35547 25.8165 3.35547 18.6253C3.35547 11.4341 9.18509 5.60443 16.3763 5.60443C23.5675 5.60443 29.3971 11.4341 29.3971 18.6253Z" stroke="#F58220" stroke-width="2.60417" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,
    },
    {
      question:"What is my PIN?",
      icon:<svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.3763 13.4169V23.8336M11.168 18.6253H21.5846M29.3971 18.6253C29.3971 25.8165 23.5675 31.6461 16.3763 31.6461C9.18509 31.6461 3.35547 25.8165 3.35547 18.6253C3.35547 11.4341 9.18509 5.60443 16.3763 5.60443C23.5675 5.60443 29.3971 11.4341 29.3971 18.6253Z" stroke="#F58220" stroke-width="2.60417" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,
    },
    {
      question:"What PIN should I use to transact on my Payattitude Digital application?",
      icon:<svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.3763 13.4169V23.8336M11.168 18.6253H21.5846M29.3971 18.6253C29.3971 25.8165 23.5675 31.6461 16.3763 31.6461C9.18509 31.6461 3.35547 25.8165 3.35547 18.6253C3.35547 11.4341 9.18509 5.60443 16.3763 5.60443C23.5675 5.60443 29.3971 11.4341 29.3971 18.6253Z" stroke="#F58220" stroke-width="2.60417" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,
    },
    {
      question:"Is my Payattitude® Digital protected from unauthorized usage?",
      icon:<svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.3763 13.4169V23.8336M11.168 18.6253H21.5846M29.3971 18.6253C29.3971 25.8165 23.5675 31.6461 16.3763 31.6461C9.18509 31.6461 3.35547 25.8165 3.35547 18.6253C3.35547 11.4341 9.18509 5.60443 16.3763 5.60443C23.5675 5.60443 29.3971 11.4341 29.3971 18.6253Z" stroke="#F58220" stroke-width="2.60417" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,
    },
    {
      question:"What happens if I cannot remember my password?",
      icon:<svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.3763 13.4169V23.8336M11.168 18.6253H21.5846M29.3971 18.6253C29.3971 25.8165 23.5675 31.6461 16.3763 31.6461C9.18509 31.6461 3.35547 25.8165 3.35547 18.6253C3.35547 11.4341 9.18509 5.60443 16.3763 5.60443C23.5675 5.60443 29.3971 11.4341 29.3971 18.6253Z" stroke="#F58220" stroke-width="2.60417" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,
    },
    {
      question:"What is my Payattitude Ewallet account number?",
      icon:<svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.3763 13.4169V23.8336M11.168 18.6253H21.5846M29.3971 18.6253C29.3971 25.8165 23.5675 31.6461 16.3763 31.6461C9.18509 31.6461 3.35547 25.8165 3.35547 18.6253C3.35547 11.4341 9.18509 5.60443 16.3763 5.60443C23.5675 5.60443 29.3971 11.4341 29.3971 18.6253Z" stroke="#F58220" stroke-width="2.60417" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,
    },
    {
      question:"What happens if my phone is stolen, damaged or changed?",
      icon:<svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.3763 13.4169V23.8336M11.168 18.6253H21.5846M29.3971 18.6253C29.3971 25.8165 23.5675 31.6461 16.3763 31.6461C9.18509 31.6461 3.35547 25.8165 3.35547 18.6253C3.35547 11.4341 9.18509 5.60443 16.3763 5.60443C23.5675 5.60443 29.3971 11.4341 29.3971 18.6253Z" stroke="#F58220" stroke-width="2.60417" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,
    },
    {
      question:"Will my Payattitude Digital work directly with my Tag?",
      icon:<svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.3763 13.4169V23.8336M11.168 18.6253H21.5846M29.3971 18.6253C29.3971 25.8165 23.5675 31.6461 16.3763 31.6461C9.18509 31.6461 3.35547 25.8165 3.35547 18.6253C3.35547 11.4341 9.18509 5.60443 16.3763 5.60443C23.5675 5.60443 29.3971 11.4341 29.3971 18.6253Z" stroke="#F58220" stroke-width="2.60417" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,
    },
    {
      question:"Can I fund my Payattitude tag offline purse from my Digital application?",
      icon:<svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.3763 13.4169V23.8336M11.168 18.6253H21.5846M29.3971 18.6253C29.3971 25.8165 23.5675 31.6461 16.3763 31.6461C9.18509 31.6461 3.35547 25.8165 3.35547 18.6253C3.35547 11.4341 9.18509 5.60443 16.3763 5.60443C23.5675 5.60443 29.3971 11.4341 29.3971 18.6253Z" stroke="#F58220" stroke-width="2.60417" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,
    },
    {
      question:"Do customers pay transaction charges after the monthly subscription?",
      icon:<svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.3763 13.4169V23.8336M11.168 18.6253H21.5846M29.3971 18.6253C29.3971 25.8165 23.5675 31.6461 16.3763 31.6461C9.18509 31.6461 3.35547 25.8165 3.35547 18.6253C3.35547 11.4341 9.18509 5.60443 16.3763 5.60443C23.5675 5.60443 29.3971 11.4341 29.3971 18.6253Z" stroke="#F58220" stroke-width="2.60417" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,
    },
    {
      question:"Will I receive alerts for transactions done on my Payattitude Digital application?",
      icon:<svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.3763 13.4169V23.8336M11.168 18.6253H21.5846M29.3971 18.6253C29.3971 25.8165 23.5675 31.6461 16.3763 31.6461C9.18509 31.6461 3.35547 25.8165 3.35547 18.6253C3.35547 11.4341 9.18509 5.60443 16.3763 5.60443C23.5675 5.60443 29.3971 11.4341 29.3971 18.6253Z" stroke="#F58220" stroke-width="2.60417" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,
    },
    {
      question:"Who is eligible to use Payattitude Digital?",
      icon:<svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.3763 13.4169V23.8336M11.168 18.6253H21.5846M29.3971 18.6253C29.3971 25.8165 23.5675 31.6461 16.3763 31.6461C9.18509 31.6461 3.35547 25.8165 3.35547 18.6253C3.35547 11.4341 9.18509 5.60443 16.3763 5.60443C23.5675 5.60443 29.3971 11.4341 29.3971 18.6253Z" stroke="#F58220" stroke-width="2.60417" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,
    },
    {
      question:"How much am I charged for having Payattitude Digital?",
      icon:<svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.3763 13.4169V23.8336M11.168 18.6253H21.5846M29.3971 18.6253C29.3971 25.8165 23.5675 31.6461 16.3763 31.6461C9.18509 31.6461 3.35547 25.8165 3.35547 18.6253C3.35547 11.4341 9.18509 5.60443 16.3763 5.60443C23.5675 5.60443 29.3971 11.4341 29.3971 18.6253Z" stroke="#F58220" stroke-width="2.60417" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,
    },
    {
      question:"What do I need to have before downloading Payattitude® Digital?",
      icon:<svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.3763 13.4169V23.8336M11.168 18.6253H21.5846M29.3971 18.6253C29.3971 25.8165 23.5675 31.6461 16.3763 31.6461C9.18509 31.6461 3.35547 25.8165 3.35547 18.6253C3.35547 11.4341 9.18509 5.60443 16.3763 5.60443C23.5675 5.60443 29.3971 11.4341 29.3971 18.6253Z" stroke="#F58220" stroke-width="2.60417" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,
    },
    {
      question:"Can I withdraw cash with my PayAttitude® Digital?",
      icon:<svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.3763 13.4169V23.8336M11.168 18.6253H21.5846M29.3971 18.6253C29.3971 25.8165 23.5675 31.6461 16.3763 31.6461C9.18509 31.6461 3.35547 25.8165 3.35547 18.6253C3.35547 11.4341 9.18509 5.60443 16.3763 5.60443C23.5675 5.60443 29.3971 11.4341 29.3971 18.6253Z" stroke="#F58220" stroke-width="2.60417" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,
    },
    {
      question:"If my Payattitude-enabled mobile phone is stolen, can an unauthorized party have access to the funds in my bank account(s) and/or e-Wallet?",
      icon:<svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.3763 13.4169V23.8336M11.168 18.6253H21.5846M29.3971 18.6253C29.3971 25.8165 23.5675 31.6461 16.3763 31.6461C9.18509 31.6461 3.35547 25.8165 3.35547 18.6253C3.35547 11.4341 9.18509 5.60443 16.3763 5.60443C23.5675 5.60443 29.3971 11.4341 29.3971 18.6253Z" stroke="#F58220" stroke-width="2.60417" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,
    },
    {
      question:"Where can I use my Payattitude to make payments?",
      icon:<svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.3763 13.4169V23.8336M11.168 18.6253H21.5846M29.3971 18.6253C29.3971 25.8165 23.5675 31.6461 16.3763 31.6461C9.18509 31.6461 3.35547 25.8165 3.35547 18.6253C3.35547 11.4341 9.18509 5.60443 16.3763 5.60443C23.5675 5.60443 29.3971 11.4341 29.3971 18.6253Z" stroke="#F58220" stroke-width="2.60417" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,
    },
    {
      question:"Is Payattitude® safe and secure?",
      icon:<svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.3763 13.4169V23.8336M11.168 18.6253H21.5846M29.3971 18.6253C29.3971 25.8165 23.5675 31.6461 16.3763 31.6461C9.18509 31.6461 3.35547 25.8165 3.35547 18.6253C3.35547 11.4341 9.18509 5.60443 16.3763 5.60443C23.5675 5.60443 29.3971 11.4341 29.3971 18.6253Z" stroke="#F58220" stroke-width="2.60417" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,
    },
    {
      question:"Where can I get help and more information about Payattitude?",
      icon:<svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.3763 13.4169V23.8336M11.168 18.6253H21.5846M29.3971 18.6253C29.3971 25.8165 23.5675 31.6461 16.3763 31.6461C9.18509 31.6461 3.35547 25.8165 3.35547 18.6253C3.35547 11.4341 9.18509 5.60443 16.3763 5.60443C23.5675 5.60443 29.3971 11.4341 29.3971 18.6253Z" stroke="#F58220" stroke-width="2.60417" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,
    },
    {
      question:"What should I do when my e-wallet or bank account is wrongly debited?",
      icon:<svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.3763 13.4169V23.8336M11.168 18.6253H21.5846M29.3971 18.6253C29.3971 25.8165 23.5675 31.6461 16.3763 31.6461C9.18509 31.6461 3.35547 25.8165 3.35547 18.6253C3.35547 11.4341 9.18509 5.60443 16.3763 5.60443C23.5675 5.60443 29.3971 11.4341 29.3971 18.6253Z" stroke="#F58220" stroke-width="2.60417" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,
    },
    {
      question:"What happens when I make a transfer and beneficiary did not get value after I have been debited?",
      icon:<svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.3763 13.4169V23.8336M11.168 18.6253H21.5846M29.3971 18.6253C29.3971 25.8165 23.5675 31.6461 16.3763 31.6461C9.18509 31.6461 3.35547 25.8165 3.35547 18.6253C3.35547 11.4341 9.18509 5.60443 16.3763 5.60443C23.5675 5.60443 29.3971 11.4341 29.3971 18.6253Z" stroke="#F58220" stroke-width="2.60417" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,
    },
    {
      question:"What will be the validation for transactions done?",
      icon:<svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.3763 13.4169V23.8336M11.168 18.6253H21.5846M29.3971 18.6253C29.3971 25.8165 23.5675 31.6461 16.3763 31.6461C9.18509 31.6461 3.35547 25.8165 3.35547 18.6253C3.35547 11.4341 9.18509 5.60443 16.3763 5.60443C23.5675 5.60443 29.3971 11.4341 29.3971 18.6253Z" stroke="#F58220" stroke-width="2.60417" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,
    },
    {
      question:"Is the PIN Validation Online- real time?",
      icon:<svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.3763 13.4169V23.8336M11.168 18.6253H21.5846M29.3971 18.6253C29.3971 25.8165 23.5675 31.6461 16.3763 31.6461C9.18509 31.6461 3.35547 25.8165 3.35547 18.6253C3.35547 11.4341 9.18509 5.60443 16.3763 5.60443C23.5675 5.60443 29.3971 11.4341 29.3971 18.6253Z" stroke="#F58220" stroke-width="2.60417" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,
    },
  ]
  return (
    <>
    <div>
    <Navbar/>
    <div className='resou-cont'>
      <div>
      <h1>
        Everything you need 
        <br/>
        to know about 
        <br/>
        payattitude</h1>
        <p>For help, clarity and guidance  </p>
        </div>
        <div>
        <img src={resou} alt=''/>
        </div>
    </div> 
      <div className='res-con'>
        <div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
          <h1>Frequently asked Questions</h1>
          <p>Everything you need to know about the payattitude.</p>
        </div>
        <div className='inputSEA'>
        <CiSearch size={25} /> <input name='' placeholder='Search' />
        </div>
      </div>


<div className='topup'>

      {
        Questions.map((u)=>{
          return(
            <div className='quest'>
              <p>{u.question}</p>
              <p>{u.icon}</p>
              </div>
          )
        })
      }
</div>
       <div className='qaty'>
        <div className='nvxx'>
          <img src={stre1} alt=''/>
            <h2>Still have questions?</h2>
            <p>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
            <button className='vcnn' onClick={()=>{
          alert("New pages")
        }}>
              Get in touch
            </button>
          </div>
         </div>
    </div>
    <Footer/>
    </>
   
  )
}

export default Resources
