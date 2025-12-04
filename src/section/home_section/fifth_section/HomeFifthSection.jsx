import React, { useState } from 'react'
import style from './home_fifth_section_style.module.css'
import FormInput from '../../../components/FormInput'
import Button from '../../../components/Button'
import axios from 'axios'
import { MdErrorOutline } from "react-icons/md"

const HomeFifthSection = () => {
  const [firstName, setFirstName] = useState('')
  const [secondName, setSecondName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [error, setError] = useState({})

  const formValidation = () => {
    const localError = {}
    if (!firstName.trim()) {
      localError.firstName = "Enter a first name";
    }

    if (!secondName.trim()) {
      localError.secondName = "Enter a last name";
    }

    if (!email.trim()) {
      localError.email = "Enter an email address.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      localError.email = "Enter an email address like example@mysite.com.";
    }

    if (message.replace(/[A-Za-z0-9\s]/g, "").length > 6) {
      localError.message = 'Too much of special characters'
    }
    setError(localError)
    return Object.keys(localError).length === 0
  }

  const joinAction = async () => {
    if (formValidation()) {
      try {
        const updateData = {
          firstName: firstName,
          secondName: secondName,
          email: email,
          message: message
        }
        const response = await axios.post('https://jsonplaceholder.typicode.com/users', updateData)
      } catch (error) {
        console.log('API error or network error')
      }
    }
  }
  return (
    <div>
      <div className={style.container} id='contact_section'>
        <div className={style.display}>
          <div className={style.heading}>
            <h1>Get in Touch</h1>
          </div>
          <div className={style.label_div}>
            <label htmlFor="first name">First Name *</label>
          </div>
          <div>
            <FormInput inputType={'text'} inputId={'first name'} getValue={firstName} getData={(e) => setFirstName(e.target.value)} style={{ borderBottom: error.firstName ? '2px solid red' : '2px solid black'}}/>
          </div>
          <div className={style.container_for_error_message}>
            <div className={style.error_icon} style={{ display: error.firstName ? 'block' : 'none' }}>
              <MdErrorOutline />
            </div>
            <div className={style.error_message}>
              {error.firstName && (<p>{error.firstName}</p>)}
            </div>
          </div>
          <div className={style.label_div}>
            <label htmlFor="second name">Second Name *</label>
          </div>
          <div>
            <FormInput inputType={'text'} inputId={'second name'} getValue={secondName} getData={(e) => setSecondName(e.target.value)} style={{ borderBottom: error.secondName ? '2px solid red' : '2px solid black'}}/>
          </div>
          <div className={style.container_for_error_message}>
            <div className={style.error_icon} style={{ display: error.secondName ? 'block' : 'none' }}>
              <MdErrorOutline />
            </div>
            <div className={style.error_message}>
              {error.secondName && (<p>{error.secondName}</p>)}
            </div>
          </div>
          <div className={style.label_div}>
            <label htmlFor="email">Email *</label>
          </div>
          <div>
            <FormInput inputType={'email'} inputId={'email'} getValue={email} getData={(e) => setEmail(e.target.value)} style={{ borderBottom: error.email ? '2px solid red' : '2px solid black'}}/>
          </div>
          <div className={style.container_for_error_message}>
            <div className={style.error_icon} style={{ display: error.email ? 'block' : 'none' }}>
              <MdErrorOutline />
            </div>
            <div className={style.error_message}>
              {error.email && (<p>{error.email}</p>)}
            </div>
          </div>
          <div className={style.label_div}>
            <label htmlFor="message">Message</label>
          </div>
          <div className={style.message_input_div}>
            <textarea name="message" id="message" value={message} rows={5} cols={45} onChange={(e) => setMessage(e.target.value)} style={{borderBottom:error.message?'2px solid red':'2px solid black'}}></textarea>
          </div>
          <div className={style.container_for_error_message}>
            <div className={style.error_icon} style={{ display: error.message ? 'block' : 'none' }}>
              <MdErrorOutline />
            </div>
            <div className={style.error_message}>
              {error.message && (<p>{error.message}</p>)}
            </div>
          </div>
          <div className={style.join_button}>
            <Button name={'Submit'} clickFunction={joinAction} />
          </div>
        </div>
        <div className={style.display}>
          Feel free to reach out to us for any inquiries or to schedule a consultation. We look forward to creating magic with you.
        </div>
      </div>
    </div>
  )
}

export default HomeFifthSection
