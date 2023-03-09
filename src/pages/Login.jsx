import { useState, useEffect } from 'react'
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom'
import { useUser } from '../context/user_context'

import styles from './styles/Login.module.css'
import { loginHero, googleLogin } from '../assets'


const Login = () => {

    const { login, userData } = useUser()
    const [user, setUser] = useState([]);
    const [profile, setProfile] = useState([]);

    useEffect(
        () => {

        }, []
    );

    return (
        <div className={styles.container}>
            <div className={styles.leftRect}>
            </div>
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
                    <div className={styles.hug}>
                        <h3 className={styles.heading}>Login to your Account</h3>
                        <h5 className={styles.motto}>Your Own Digital Campaign</h5>
                    </div>
                    <div className={styles.number_login}>

                        {/* Number Input */}
                        <label htmlFor='number-input' >
                            <span>+91
                                <div className={styles.divider}></div>
                            </span>
                            <input id="number-input" name='number' type='number' placeholder='mobile number' className={styles.input} />
                        </label>

                        {/* Login Button */}
                        <label className={styles.loginBtn} htmlFor='submit'><p>Login to Your Account</p></label>
                        <button type='button' onClick={() => login()} />
                        <img src={googleLogin} className={styles.img} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login