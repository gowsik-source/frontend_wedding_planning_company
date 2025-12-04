import React, { useState } from 'react'
import style from './register_style.module.css'
import FormInput from '../../components/FormInput.jsx'
import Button from '../../components/Button.jsx'
import axiosDetails from '../../API/BaseURL.jsx'
import { MdErrorOutline } from "react-icons/md"

const Register = () => {
    const [firstName, setFirstName] = useState('')
    const [secondName, setSecondName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [reEnterPassword, setReEnterPassword] = useState('')

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

        if (!password) {
            localError.password = "Enter a password.";
        }
        if (password.length < 9) {
            localError.password = "Password must be at least 9 to 16 characters.";
        }
        if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(password)) {
            localError.password = "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
        }

        if (!reEnterPassword) {
            localError.reEnterPassword = "Re-enter your password.";
        }
        if (password !== reEnterPassword) {
            localError.reEnterPassword = "Passwords do not match.";
        }

        setError(localError)
        return Object.keys(localError).length === 0
    }

    const registerAction = async () => {
        if (formValidation()) {
            try {
                const updateData = {
                    firstName: firstName,
                    secondName: secondName,
                    email: email,
                    password: password
                }
                const response = await axiosDetails.post('user/create', updateData)
                console.log(response.data, 'data')
            } catch (error) {
                console.log('API error or network error')
            }
        }
    }

    return (
        <div>
            <div className={style.container}>
                <div className={style.display}>
                    <div className={style.child_display}>
                        <div className={style.heading}>
                            <h1>Register</h1>
                        </div>
                        <div className={style.input_field}>
                            <FormInput inputType={'text'} placehold={'first name'} inputId={'first name'} getValue={firstName} getData={(e) => setFirstName(e.target.value)} style={{ borderBottom: error.firstName ? '2px solid red' : '2px solid black' }} />
                        </div>
                        <div className={style.container_for_error_message}>
                            <div className={style.error_icon} style={{ display: error.firstName ? 'block' : 'none' }}>
                                <MdErrorOutline />
                            </div>
                            <div className={style.error_message}>
                                {error.firstName && (<p>{error.firstName}</p>)}
                            </div>
                        </div>
                        <div className={style.input_field}>
                            <FormInput inputType={'text'} placehold={'Second name'} inputId={'second name'} getValue={secondName} getData={(e) => setSecondName(e.target.value)} style={{ borderBottom: error.secondName ? '2px solid red' : '2px solid black' }} />
                        </div>
                        <div className={style.container_for_error_message}>
                            <div className={style.error_icon} style={{ display: error.secondName ? 'block' : 'none' }}>
                                <MdErrorOutline />
                            </div>
                            <div className={style.error_message}>
                                {error.secondName && (<p>{error.secondName}</p>)}
                            </div>
                        </div>
                        <div className={style.input_field}>
                            <FormInput inputType={'email'} placehold={'email'} inputId={'email'} getValue={email} getData={(e) => setEmail(e.target.value)} style={{ borderBottom: error.email ? '2px solid red' : '2px solid black' }} />
                        </div>
                        <div className={style.container_for_error_message}>
                            <div className={style.error_icon} style={{ display: error.email ? 'block' : 'none' }}>
                                <MdErrorOutline />
                            </div>
                            <div className={style.error_message}>
                                {error.email && (<p>{error.email}</p>)}
                            </div>
                        </div>
                        <div className={style.input_field}>
                            <FormInput inputType={'password'} placehold={'password'} inputId={'password'} getValue={password} getData={(e) => setPassword(e.target.value)} style={{ borderBottom: error.password ? '2px solid red' : '2px solid black' }} />
                        </div>
                        <div className={style.container_for_error_message}>
                            <div className={style.error_icon} style={{ display: error.password ? 'block' : 'none' }}>
                                <MdErrorOutline />
                            </div>
                            <div className={style.error_message}>
                                {error.password && (<p>{error.password}</p>)}
                            </div>
                        </div>
                        <div className={style.input_field}>
                            <FormInput inputType={'password'} placehold={'Re-enter password'} inputId={'reEnterPassword'} getValue={reEnterPassword} getData={(e) => setReEnterPassword(e.target.value)} style={{ borderBottom: error.reEnterPassword ? '2px solid red' : '2px solid black' }} />
                        </div>
                        <div className={style.container_for_error_message} style={{ display: error.reEnterPassword ? 'block' : 'none' }}>
                            <div className={style.error_icon}>
                                <MdErrorOutline />
                            </div>
                            <div className={style.error_message}>
                                {error.reEnterPassword && (<p>{error.reEnterPassword}</p>)}
                            </div>
                        </div>
                        <div className={style.input_field_button}>
                            <Button name={'Register'} clickFunction={registerAction} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
