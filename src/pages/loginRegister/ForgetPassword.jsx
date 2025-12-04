import React, { useState } from 'react'
import style from './forget_password.module.css'
import FormInput from '../../components/FormInput.jsx'
import Button from '../../components/Button.jsx'
import axiosDetails from '../../API/BaseURL.jsx'

const ForgetPassword = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState({})

  const fieldValidation = () => {
    const localError = {}
    if (!email.trim()) {
      localError.email = "Enter an email address.";
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      localError.email = "Enter an email address like example@gmail.com"
    }
    setError(localError)
    return Object.keys(localError).length === 0
  }

  const continueAction = async () => {
    if (fieldValidation()) {
      try {
        let response = await axiosDetails.put('user/forgotPassword/:id', { email })
      } catch (error) {
        console.log("Error in sending reset password email: ", error);
      }
    }
  }
  return (
    <div>
      <div className={style.container}>
        <div className={style.display}>
          <div className={style.child_display}>
            <div className={style.heading}>
              <h1>Forget password</h1>
            </div>
            <div className={style.input_field}>
              <FormInput inputType={'email'} placehold={'Email'} inputId={'email'} getValue={email} getData={(e) => setEmail(e.target.value)} />
            </div>
            <div className={style.error_message}>
              {error.email && (<p>{error.email}</p>)}
            </div>
            <div className={style.input_field_button}>
              <Button name={'Continue'} clickFunction={continueAction} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgetPassword
