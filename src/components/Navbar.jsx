import React, { useState } from 'react'
import style from '../components/navBar_style.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import { FiAlignJustify } from "react-icons/fi";
import { RiCloseLargeFill } from "react-icons/ri";
import Button from '../components/Button.jsx'

const Navbar = () => {
  const [open, setOpen] = useState(false); //navbar
  const navigate = useNavigate(); //login navigate
  //navbar
  const barHandle = () => {
    setOpen(!open)
  }
  //login navigate
  const loginNavigate = () => {
    navigate('/login')
  }

  return (
    <div>
      {/* ------------------web view-------------------- */}
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.logo}>
            <Link to={'/'}>J.Patel</Link>
          </div>
          <div className={style.display}>
            <ul>
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/about'}>About</Link></li>
              <li><Link to={'/services'}>Services</Link></li>
              <li><HashLink smooth to='/#contact_section'>Contact</HashLink></li>
            </ul>
          </div>
          <div className={style.login_button_web}>
            <Button name={'login'} clickFunction={loginNavigate}/>
          </div>
        </div>
      </div>

      {/* ----------------------------mobile view */}

      <div className={style.nav_bar_head_for_mobile_responsive}>
        <div className={style.container_for_mobile_responsive}>
          {/* -----------logo --------------- */}
          <div className={style.logo_mobile_responsive} style={{ visibility: open ? 'hidden' : 'visible' }}>
            <Link to={'/'}>J.Patel</Link>
          </div>
          {/* ---------------bar icon --------------- */}
          <div className={style.bar_icon}>
            <div className={style.login_button_mobile} style={{ display: open ? 'none' : 'block' }}>
              <Button name={'login'} clickFunction={loginNavigate}/>
            </div>
            <div className={style.three_bar_icon} style={{ display: open ? 'none' : 'block' }}>
              <button onClick={barHandle}><FiAlignJustify /></button>
            </div>
            <div className={style.x_bar_icon} style={{ display: open ? 'block' : 'none' }}>
              <button onClick={barHandle}><RiCloseLargeFill /></button>
            </div>
          </div>
        </div>
      </div>

            {/* -----------mobile view expanded menu---------------- */}

      <div className={style.nav_items_for_mobile_responsive} style={{ display: open ? 'flex' : 'none' }}>
        <ul onClick={()=>setOpen(false)}>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/about'}>About</Link></li>
          <li><Link to={'/services'}>Services</Link></li>
          <li><HashLink smooth to='/#contact_section'>Contact</HashLink></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
