import { useState, useEffect } from 'react'
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate, Navigate } from 'react-router-dom'
import { useUser } from '../context/user_context'

import styles from './styles/Login.module.css'
import { loginHero, googleLogin, navLogo } from '../assets'


const Login = () => {
    const navigate = useNavigate()

    const { login, loading, isAuthenticated } = useUser()

    const handleLogin = () => {
        try {
            login();

        } catch (e) {
            console.log(e.message)
        }
    }

    useEffect(() => {
        isAuthenticated ? <Navigate to="/dashboard" /> : null;
    }, [])


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
                {/* LOGIN LOGO CONTAINER */}
                <div className={styles.loginLogos}>
                    <img className={styles.loginLogo} src={navLogo} />
                    <h3 className={styles.loginTextLogo}>FI<span>T</span>NESS</h3>
                </div>
                {/* LOGIN FORM */}
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
                            <div className={styles.divider} />
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
                        <img src={googleLogin} className={styles.googleLoginLogo} onClick={() => login()} />

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login