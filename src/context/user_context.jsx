import { useGoogleLogin } from '@react-oauth/google';
import { createContext, useContext, useState, useEffect } from 'react'
import { redirect, useLocation } from 'react-router-dom'
import axios from 'axios'

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("userinfo")));
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (user) redirect("/dashboard")
    }, []);

    const login = useGoogleLogin({
        onSuccess: async response => {
            try {
                setLoading(true);
                await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
                    headers: {
                        "Authorization": `Bearer ${response.access_token}`
                    }
                })
                    .then(res => {
                        localStorage.setItem("userinfo", JSON.stringify(res.data));

                        setUser(res.data)
                        setLoading(false)
                        console.log(res.data)
                    })
            } catch (err) {
                console.log(err)
            }
        }
    });

    return (
        <UserContext.Provider value={{ userData: user, login, loading }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext);