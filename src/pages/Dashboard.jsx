import styles from './styles/Dashboard.module.css'
import Sidebar from './../components/Sidebar/Sidebar';
import Header from './../components/Header/Header';
import Actions from './../components/Actions/Actions';
import { useEffect } from 'react'
import { useUser } from "../context/user_context";
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {

    const { userData } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        userData === null || undefined ? navigate("/") : null;
    }, []);
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