import React from 'react'
import style from './about_first_section.module.css'
import leftImage from '../../../assets/about_page_first_section_left_side_image.jpg'
import rightImage from '../../../assets/about_page_first_section_right_side_image.jpg'

const AboutFirstSection = () => {
  return (
    <div>
      <div className={style.container}>
        <div className={style.display}>
          <div className={style.heading}>
            <h1>Our Story</h1>
          </div>
          <div>
            <p>At J. Patel, we are dedicated to creating unforgettable wedding experiences tailored to each couple's unique vision. With a focus on personalized service and flawless execution, we handle every detail, from intimate gatherings to grand celebrations. Our goal is to ensure that couples can relax and enjoy their special day without any stress.</p>
          </div>
          <div>
            <p>With a passion for timeless elegance and modern sophistication, we bring creativity and expertise to every wedding we design. Our approach blends refined aesthetics with meticulous planning, ensuring that every detail reflects your love story in the most beautiful way.</p>
          </div>
          <div>
            <p>From selecting the perfect venue to curating exquisite décor, we are committed to making your wedding not just an event, but an unforgettable experience filled with warmth, joy, and effortless style.</p>
          </div>
          <div className={style.left_side_image_section}>
            <img src={leftImage} alt="Long portrait" />
          </div>
        </div>
        <div className={style.display}>
        <div className={style.right_side_image_section}>
          <img src={rightImage} alt="Landscope" />
        </div>
        </div>
      </div>
    </div>
  )
}

export default AboutFirstSection
