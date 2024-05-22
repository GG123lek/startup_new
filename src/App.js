import React from 'react'
import { BrowserRouter,  Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Partners from './Pages/Partners'
import Company from './Pages/Company'
import Resources  from './Pages/Resources'
import Contact from './Pages/Contact Us'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route>

    <Route exact path="/" element={<Home/>} />
    <Route  path="/product" element={<Products/>} />
    <Route  path="/partners" element={<Partners/>} />
    <Route path="/company" element={<Company/>} />
    <Route path="/resources" element={< Resources/>} />
    <Route path="/contact"   element={< Contact/>} />

    </Route>
    </Routes>
        
    </BrowserRouter>
    {/* <Navbar/> */}
    </>
  )
}

export default App

