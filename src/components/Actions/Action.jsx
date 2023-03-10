import React from 'react'
import styles from './action.module.css'

const Action = ({ icon, title }) => {
    return (
        <div >
            <div className={styles.content}>
                <div className={styles.background} />
                <img src={icon} className={styles.icon} />
                <h4 className={styles.actionTitle}>{title}</h4>
            </div>
        </div>
    )
}

export default Action