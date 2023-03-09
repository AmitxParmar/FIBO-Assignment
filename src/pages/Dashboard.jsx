import React from 'react'
import styles from './styles/Dashboard.module.css'
import Sidebar from './../components/Sidebar/Sidebar';
import Header from './../components/Header/Header';
import Actions from './../components/Actions/Actions';

const Dashboard = () => {
    return (
        <div className={styles.dashboard}>
            <Sidebar />
            <div className={styles.rightPanel}>

                <Header />
                <Actions />
            </div>
        </div>
    )
}

export default Dashboard