import React from 'react'
import style from './home_first_section.module.css'
import { HashLink } from 'react-router-hash-link'

const HomeFirstSection = () => {
  return (
    <div>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.heading}>
            <h1>Dream Weddings</h1>
          </div>
          <div className={style.text}>
            <p>Creating unforgettable weddings with attention to detail and a touch of magic. Let us make your special day stress-free and truly memorable.</p>
          </div>
          <div className={style.get_touch_button}>
            <HashLink smooth to='/#contact_section'>Get in Touch</HashLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeFirstSection
