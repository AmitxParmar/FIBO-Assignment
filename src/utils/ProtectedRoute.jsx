import { Navigate } from 'react-router-dom';

import { useAuth } from '../hooks/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();
    return user ? children : <Navigate to="/" />;
};