import React from 'react'
import styles from './styles/NotFound.module.css'

import { Link } from 'react-router-dom'

const NotFound = () => (
    <div className={styles.container}>
        <h1>| Not - Found |</h1>
        <Link to="/" className='link'>
            Return to Dashboard
        </Link>
    </div>
)

export default NotFound