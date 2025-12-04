import React from 'react'
import style from './services_first_section.module.css'
import image1 from '../../../assets/consult.jpg'
import image2 from '../../../assets/planing.jpg'
import image3 from '../../../assets/coordinate.jpg'

const ServicesFirstSection = () => {
  let content = [
    {
      img: image1,
      heading: 'consultation',
      subHeading: 'guidence',
      notes: 'Our consultation services provide couples with personalized guidance and expert advice to kickstart their wedding planning journey. We focus on understanding your vision and preferences to create a tailored plan that reflects your unique style and requirements.'
    },
    {
      img: image2,
      heading: 'Event Planing',
      subHeading: 'events',
      notes: 'From intimate gatherings to grand celebrations, our event planning services cater to every detail of your special day. We handle everything from venue selection and decor to vendor coordination, ensuring a seamless and stress-free experience for you and your guests.'
    },
    {
      img: image3,
      heading: 'On-the-Day Coordination',
      subHeading: 'Smooth Execution',
      notes: 'Our on-the-day coordination services guarantee a smoothly executed event. We manage all operational aspects on the day of your wedding, allowing you to relax and enjoy every moment without worrying about any logistics or unexpected issues.'
    }
  ]

  return (
    <div>
      <div className={style.container_for_section_heading}>
        <div>
          <h5>Services Offered</h5>
        </div>
      </div>
      {content.map((data, index) => (
        <div key={index} style={{ flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }} className={style.container}>
          <div className={style.image_section}>
            <img src={data.img} alt="services" />
          </div>
          <div className={style.content_section}>
            <div>
              <h1>{data.heading}</h1>
            </div>
            <div>
              <h4>{data.subHeading}</h4>
            </div>
            <div>
              <p>{data.notes}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ServicesFirstSection
