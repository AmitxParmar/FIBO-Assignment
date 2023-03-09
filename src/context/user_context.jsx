import { useGoogleLogin } from '@react-oauth/google';
import { createContext, useContext, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("userinfo")));

    useEffect(() => {
        console.log('user changed', user);
    }, []);

    const login = useGoogleLogin({
        onSuccess: async response => {
            try {
                await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
                    headers: {
                        "Authorization": `Bearer ${response.access_token}`
                    }
                })
                    .then(res => {
                        localStorage.setItem("userinfo", JSON.stringify(res.data));
                        setUser(res.data)
                        console.log(res.data)
                    })
            } catch (err) {
                console.log(err)
            }
        }
    });

    return (
        <UserContext.Provider value={{ userData: user, login }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext);