import { useState, useEffect } from 'react'
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom'
import { useUser } from '../context/user_context'

import styles from './styles/Login.module.css'
import { loginHero, googleLogin } from '../assets'


const Login = () => {
    const navigate = useNavigate()

    const { login, userData, loading } = useUser()

    const handleLogin = () => {
        try {
            login();
            if (!loading) navigate("/dashboard")
        } catch (e) {
            console.log(e.message)
        }
    }


    return (
        <div className={styles.container}>
            <img className={styles.imgMobile} />
            <div className={styles.leftRect} />
            <div className={styles.heroContainer}>
                <img src={loginHero} />
                <div className={styles.content}>
                    <h3 className={styles.heading}>Fitness Made Easy</h3>
                    <p>
                        FiBO helps you track your fitness goals, and manage your gyms, clients and branches in a one stop solution, saving you time and money!
                    </p>
                </div>
            </div>
            <div className={styles.loginContainer}>
                <div className={styles.loginForm}>
                    {/* Hug */}
                    <div className={styles.hug}>
                        <h3 className={styles.heading}>Login to your Account</h3>
                        <h5 className={styles.motto}>Your Own Digital Campaign</h5>
                    </div>

                    <div className={styles.number_login}>

                        {/* Number Input */}
                        <div className={styles.inputContainer}>
                            <span>+91</span>
                            <div className={styles.divider}></div>
                            <input id="number-input" name='number' type='number' placeholder='mobile number' className={styles.input} />
                        </div>

                        {/* Login Button */}
                        <label className={styles.loginBtn} htmlFor='submit'><p>Login to Your Account</p></label>
                        <button id='submit' type='button' />
                        {/* OPTIONAL LOGIN */}
                        <div className={styles.orContainer}>
                            <div className={styles.line1} />
                            <span>OR</span>
                            <div className={styles.line2} />
                        </div>
                        {/* GOOGLE LOGIN BUTTON */}
                        <img src={googleLogin} className={styles.img} />
                        <button className={styles.googleLogin} onClick={() => handleLogin()}>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login