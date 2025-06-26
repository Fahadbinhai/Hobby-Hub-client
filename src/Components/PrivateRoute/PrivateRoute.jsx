import React, { useContext } from 'react';
import { AuthContext } from '../ContextProvider/ContextProvider';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-dots loading-lg text-blue-500"></span>
            </div>
        )
    }

    if (!user && !user?.email) {
        return <Navigate to='/login'></Navigate>
    }

    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;