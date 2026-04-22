import React, { useState } from 'react'
import style from './footer_style.module.css'
import { Link } from 'react-router-dom'
import axiosDetails from '../API/BaseURL'
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md"
import Button from './Button';
import FormInput from './FormInput'

const Footer = () => {

  const [email, setEmail] = useState('')
  const [error, setError] = useState({})
  
  const [checked, setChecked] = useState(false)
  const [checkError, setCheckError] = useState('')

  const emailValidation = () => {
    const localError = {}
    if (!email.trim()) {
      console.log('empty')
      localError.email = 'Enter an email address like example@mysite.com.'
    } else if (!email.includes('@')) {
      console.log('@');
      localError.email = 'Please include "@" in the email'
    }
    setError(localError)
    return Object.keys(localError).length === 0
  }

  const checkBoxVerification = () => {
    // const checkBoxError = (false)
    if (!checked) {
      setCheckError('check box is not checked');
      // checkBoxError.checked='Check the box to continue'
      return false;
    }
    setCheckError('')
    return true;
  }

  const joinAction = async () => {
    if (emailValidation() && checkBoxVerification()) {
      try {
        const payLoad = {
          email: email
        }
        const response = await axiosDetails.post('/footer/subscribe', payLoad)
        console.log(response.data)
      } catch (error) {
        console.log('API error or network error')
      }
    }
  }
  return (
    <div>
      <div className={style.container}>
        <div className={style.display_left}>
          <div className={style.logo}>
            <h1>
              <Link to={'/'}>J.Patel</Link>
            </h1>
          </div>
          <div className={style.down_left_corner_section}>
            <div className={style.left_one}>
              <div>
                123-456-7890
              </div>
              <div>
                <Link to={'/'}>info@mysite.com</Link>
              </div>
            </div>
            <div className={style.left_two}>
              <div>
                500 Terry Francine St.
              </div>
              <div>
                San Francisco, CA 94158
              </div>
            </div>
          </div>
        </div>
        <div className={style.display_right}>
          <div className={style.connect_heading}>
            <h2>Connect with Us</h2>
          </div>
          <div className={style.email_input_label}>
            <label htmlFor="mail_id">Email*</label>
          </div>
          <div className={style.email_input}>
            <FormInput inputType={email} inputId={'mail_id'} getValue={email} getData={(e) => setEmail(e.target.value)} style={{borderBottom:error.email? '2px solid red':'2px solid black'}}/>
          </div>
          <div className={style.error}>
            <div className={style.error_icon} style={{ display: Object.values(error).length > 0 ? 'block' : 'none' }}>
              <MdErrorOutline />
            </div>
            <div className={style.message}>
              <p>{Object.values(error).join(" | ")}</p>
            </div>
          </div>
          <div className={style.subscribe_checkbox}>
            <div className={style.checkbox_div}>
              <input type="checkbox" id='check_box' checked={checked} onChange={(e) => setChecked(e.target.checked)} />
            </div>
            <div className={style.checkbox_label}>
              <label htmlFor="check_box">Yes, subscribe me to your newsletter. *</label>
            </div>
          </div>
          <div className={style.error}>
            <div className={style.error_icon} style={{ display: checkError ? 'block' : 'none' }}>
              <MdErrorOutline />
            </div>
            <div className={style.message}>
              <p>{checkError}</p>
            </div>
          </div>
          <div className={style.join_button}>
            <Button clickFunction={joinAction} name={'Join'} />
          </div>
          <div className={style.mobile_responsive_for_text_and_icon}>
            <div className={style.join_button_below_text}>
              <div>
                <Link to={'/'}>Privacy Policy</Link>
              </div>
              <div>
                <Link to={'/'}>Accessibility Statement</Link>
              </div>
            </div>
            <div className={style.icon_container}>
              <div>
                <Link to={'/'}><FaInstagram size={20} /></Link>
              </div>
              <div>
                <Link to={'/'}><FaYoutube size={20} /></Link>
              </div>
            </div>
          </div>
          {/* <div className={style.powered_by_text}>
            © 2035 by J. Patel. Powered and secured by <Link to={'/'} className={style.by_wix_website}>wix</Link>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Footer
