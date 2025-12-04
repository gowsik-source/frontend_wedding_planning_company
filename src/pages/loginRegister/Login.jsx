import React, { useState } from 'react'
import style from './login_style.module.css'
import FormInput from '../../components/FormInput.jsx'
import Button from '../../components/Button.jsx'
import { Link } from 'react-router-dom'
import axiosDetails from '../../API/BaseURL.jsx'
import { useNavigate } from 'react-router-dom'
import { MdErrorOutline } from "react-icons/md"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigate();

    const [error, setError] = useState({})

    const formValidation = () => {
        const localError = {}
        if (!email.trim()) {
            localError.email = "Enter an email address.";
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            localError.email = "Enter an email address like example@gmail.com.";
        }
        if (!password) {
            localError.password = "Enter a password.";
        }
        setError(localError)
        return Object.keys(localError).length === 0
    }

        const loginAction = async () => {
            if (formValidation()) {
                try {
                    const response = await axiosDetails.post('user/login', { email, password })
                    if (response) {

                        navigation('/')
                    }
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
                                <h1>LOGIN</h1>
                            </div>
                            <div className={style.input_field}>
                                <FormInput inputType={'email'} placehold={'Email'} inputId={'email'} getValue={email} getData={(e) => setEmail(e.target.value)}  style={{ borderBottom: error.email ? '2px solid red' : '2px solid black' }}/>
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
                                <FormInput inputType={'password'} placehold={'password'} inputId={'password'} getValue={password} getData={(e) => setPassword(e.target.value)}  style={{ borderBottom: error.password ? '2px solid red' : '2px solid black' }}/>
                            </div>
                            <div className={style.container_for_error_message}>
                                <div className={style.error_icon} style={{ display: error.password ? 'block' : 'none' }}>
                                    <MdErrorOutline />
                                </div>
                                <div className={style.error_message}>
                                    {error.password && (<p>{error.email}</p>)}
                                </div>
                            </div>
                            <div className={style.forget_password}>
                                <Link to={'/forgetPassword'}>Forget password?</Link>
                            </div>
                            <div className={style.input_field_button}>
                                <Button name={'login'} clickFunction={loginAction} />
                            </div>
                            <div className={style.not_a_member}>
                                Not a Member ? <Link to={'/register'} className={style.register}>Register</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    export default Login
