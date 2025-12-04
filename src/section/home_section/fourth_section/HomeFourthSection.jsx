import React from 'react'
import style from './home_fourth_section_style.module.css'
import Button from '../../../components/Button'
import { useNavigate } from 'react-router-dom'

const HomeFourthSection = () => {
  const navigation = useNavigate();

  const goToServicesPage = () => {
    navigation('/services')
  }

  const processing = [
    {
      heading: 'Consultation',
      sideHeading: 'Initial Meeting',
      contents: 'Our first step is to understand your vision and preferences. We discuss themes, styles, and expectations to create a personalized plan that suits your unique requirements.'
    },
    {
      heading: 'Planing',
      sideHeading: 'Design & Coordination',
      contents: 'Once we have your vision in place, we start the planning process. From venue selection to decor, we handle all the details to ensure a seamless and stress-free experience.'
    },
    {
      heading: 'Execution',
      sideHeading: 'On the Big Day',
      contents: 'On your wedding day, we make sure everything runs smoothly. Our team coordinates all aspects, allowing you to relax and enjoy every moment worry-free.'
    }
  ]
  return (
    <div>
      <div className={style.container_for_section_heading}>
        <div>
          <h5>Process</h5>
        </div>
      </div>
      <div className={style.secondary_heading}>
        <div>
          <h3>Our Approach</h3>
        </div>
      </div>
      <div className={style.Button_for_learnmore}>
        <div>
          <Button name={'Learn More'} clickFunction={goToServicesPage}/>
        </div>
        </div>
      {processing.map((process, index) => (
        <div key={index}>
          <div className={style.parent_container}>
            <div className={style.container}>
              <div className={style.display}>
                <h2>{process.heading}</h2>
                <h4>{process.sideHeading}</h4>
              </div>
              <div className={style.display}>
                <p>{process.contents}</p>
              </div>
            </div>
          </div>
          <div className={style.horizontal_line}>
          <hr />
          </div>
        </div>
      ))}
    </div>
  )
}

export default HomeFourthSection
