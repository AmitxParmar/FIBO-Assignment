import { Navigate } from 'react-router-dom';

import { useUser } from '../context/user_context';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useUser();
    return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;