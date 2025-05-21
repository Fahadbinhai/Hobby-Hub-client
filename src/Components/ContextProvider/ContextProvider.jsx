import React, { createContext } from 'react';





export const AuthContext = createContext();

const ContextProvider = ({ children }) => {




    const authValue={
        
    }

    return (
        <div>
            <AuthContext.Provider value={authValue} >
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default ContextProvider;