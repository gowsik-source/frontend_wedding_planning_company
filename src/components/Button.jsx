import React from 'react'
import style from '../components/button_style.module.css'

const Button = (props) => {
  return (
    <div>
      <button className={style.default_style} onClick={props.clickFunction}>{props.name}</button>
    </div>
  )
}

export default Button
