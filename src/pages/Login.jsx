import { useState, useEffect } from 'react'
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom'

import styles from './styles/login.module.css'
import { loginHero, googleLogin } from '../assets'

const Login = () => {
    const [user, setUser] = useState([]);
    const [profile, setProfile] = useState([]);

    function handleLogin() {
        useGoogleLogin({
            onSuccess: tokenResponse => {
                localStorage.setItem("loginWith", 'Google')
                localStorage.setItem('accessToken', tokenResponse.access_token)
                setUser(tokenResponse)
                console.log(tokenResponse.access_token, "access_token")
            },
            onError: error => console.log("Login Error: ", error)
        })
    }


    useEffect(
        () => {
            function fetchUserData(user) {
                if (user) {
                    axios
                        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                            headers: {
                                Authorization: `Bearer ${user.access_token}`,
                                Accept: 'application/json'
                            }
                        })
                        .then((res) => {
                            console.log("authData:", res)
                            setProfile(res.data);
                        })
                        .catch((err) => console.log(err));
                }
            }
            () => fetchUserData(u);
        },
        [user]
    );


    return (
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
    )
}

export default Login