import React from 'react'
import styles from './action.module.css'

const Action = ({ icon, title }) => {
    return (
        <div className={styles.container}>
            <div className={styles.background}></div>
            <div className={styles.content}>
                <img src={icon} className={styles.icon} />
                <h4 className={styles.actionTitle}>{title}</h4>
            </div>
        </div>
    )
}

export default Action