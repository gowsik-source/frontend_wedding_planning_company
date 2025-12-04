import React from 'react'
import style from './form_input_style.module.css'

const FormInput = (props) => {
  return (
    <div>
      <input type={props.inputType} id={props.inputId} value={props.getValue} onChange={props.getData} placeholder={props.placehold} style={props.style}/>
    </div>
  )
}

export default FormInput
