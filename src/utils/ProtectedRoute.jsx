import { Navigate } from 'react-router-dom';

import { useUser } from '../context/user_context';

const ProtectedRoute = ({ children }) => {
    const { userData } = useUser();
    return userData ? children : <Navigate to="/" />;
};

export default ProtectedRoute;