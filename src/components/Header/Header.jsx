import React from 'react'
import styles from './Header.module.css'

import notification from './../../assets/notification.svg'

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <h1 className={styles.title}>Dashboard</h1>
                <h6 className={styles.greeting}>Welcome back, Syeda!</h6>
            </div>
            <div className={styles.notification_profile}>
                <img src={notification} className={styles.notificationIcon} />
                <img className={styles.userProfile} /> {/* TODO: User Profile Pic */}
            </div>
        </div>
    )
}

export default Header