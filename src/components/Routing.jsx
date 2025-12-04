import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Services from '../pages/services/Services'
import Login from '../pages/loginRegister/Login'
import ForgetPassword from '../pages/loginRegister/ForgetPassword'
import Register from '../pages/loginRegister/Register'
import Navbar from './Navbar'
import Footer from './Footer'
import NavigationPageTop from './NavigationPageTop'

const Routing = () => {
  return (
    <div>
      <Navbar/>
      <NavigationPageTop/> {/* Always scroll to top when I navigate particular pages*/}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/forgetPassword' element={<ForgetPassword/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/#contact_section'/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default Routing
