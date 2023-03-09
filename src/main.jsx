import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.GOOGLE_CLIENT_ID}>
      {console.log(import.meta.env.VITE_GOOGLE_CLIENT_ID, "Load google id from env")}
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
)
