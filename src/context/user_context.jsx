import { useGoogleLogin } from '@react-oauth/google';
import { createContext, useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        console.log('user changed', user);
    }, []);

    const clientId = "230608367006-m22ocmglv6o9hrsfd190op4dur5ifjao.apps.googleusercontent.com"

    return (
        <UserContext.Provider value={{ userData: user }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext);