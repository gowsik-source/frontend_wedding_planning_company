import React from 'react'
import style from './home_second_section.module.css'
import ourStoryImage from '../../../assets/home_page_second_section_our_story_image.jpg'
import Button from '../../../components/Button'
import { useNavigate } from 'react-router-dom'

const HomeSecondSection = () => {
  const navigation = useNavigate();

  const aboutPage = () => {
    navigation('/about')
  }

  return (
    <div>
      <div className={style.container_for_section_heading}>
        <div>
        <h5>Our Story</h5>
        </div>
        <div></div>
      </div>
      <div className={style.container}>
        <div className={style.image_section}>
          <img src={ourStoryImage} alt="story_image"/>
        </div>
        <div className={style.display}>
          <div className={style.content}>
            At J. Patel, we specialize in turning dreams into reality. With a focus on personalized service and flawless execution, we craft tailor-made experiences for couples, ensuring their wedding day is a true reflection of their love story.
          </div>
          <div className={style.explore_button}>
            <Button name={'Explore More'} clickFunction={aboutPage}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeSecondSection
