import React from 'react'
import Action from './Action'

import styles from './actions.module.css'

import { quick_actions } from '../../constants'

const Actions = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.actionTitle}>Quick Actions</h3>
            <div className={styles.links}>
                {quick_actions.map(({ title, icon }) => <Action className={styles.link} title={title} icon={icon} />)}
            </div>
        </div>
    )
}

export default Actions