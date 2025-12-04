import React from 'react'
import style from './home_third_section.module.css'

const HomeThirdSection = () => {
  const testimonials = [
    {
      comment: '“Our wedding was a dream come true! J. Patel made every moment special and stress-free.”',
      user: 'Sara Johnson'
    },
    {
      comment: '“The attention to detail was incredible. We could not have asked for a more perfect day.”',
      user: 'Michael & Emily'
    },
    {
      comment: '“Thank you for creating the wedding of our dreams. It was beyond anything we imagined.”',
      user: 'David & Maria'
    }
  ]
  return (
    <div>
      <div className={style.container}>
        <div className={style.display}>
          <div className={style.container_for_section_heading}>
            <div>
              <h5>Testimonials</h5>
            </div>
            <div></div>
          </div>
          {testimonials.map((reviews, index) => (
            <div key={index}>
              <p>{reviews.comment}</p>
              <p>{reviews.user}</p>
            </div>
          ))}
        </div>
        {/* <div className={style.display}></div> */}
      </div>
    </div>
  )
}

export default HomeThirdSection
