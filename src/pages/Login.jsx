import React from 'react'
import styles from './styles/Login.module.css'
import { useGoogleLogin } from '@react-oauth/google';

import { loginHero, googleLogin } from '../assets'

const Login = () => {
    const handleLogin = () => {
        useGoogleLogin({
            onSuccess: tokenResponse => console.log(tokenResponse),
        })
    }

    return (<>
        <div className={styles.container}>
            <div className={styles.leftRect}>
            </div>
            <div className={styles.heroContainer}>
                <img src={loginHero} />
                <div className={styles.content}>
                    <h3>Fitness Made Easy</h3>
                    <p>
                        FiBO helps you track your fitness goals, and manage your gyms, clients and branches in a one stop solution, saving you time and money!
                    </p>
                </div>
            </div>
            <div className={styles.loginContainer}>
                <div className={styles.loginForm}>
                    <input type='number' />
                    <img src={googleLogin} onClick={() => handleLogin()} />

                </div>
            </div>
        </div>
    </>
    )
}

export default Login