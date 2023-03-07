import React from 'react'
import styles from './styles/Dashboard.module.css'
import Sidebar from './../components/Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div className={styles.dashboard}>
            <Sidebar />
        </div>
    )
}

export default Dashboard