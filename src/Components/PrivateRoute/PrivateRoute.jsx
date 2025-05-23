import React, { useContext } from 'react';
import { AuthContext } from '../ContextProvider/ContextProvider';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {

    const {user} = useContext(AuthContext)

    if(!user && !user?.email){
        return <Navigate to='/login'></Navigate>
    }

    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;