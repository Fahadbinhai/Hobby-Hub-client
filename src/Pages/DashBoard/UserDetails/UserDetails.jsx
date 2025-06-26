import React, { useContext } from 'react';
import { AuthContext } from '../../../Components/ContextProvider/ContextProvider';

const UserDetails = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col sm:flex-row items-center gap-4 w-full max-w-3xl mx-auto">
            <div className="w-32 h-32">
                <img
                    src={user?.photoURL}
                    alt="User"
                    className="w-full h-full object-cover rounded-full border-2 border-blue-400"
                />
            </div>
            <div className="text-center sm:text-left">
                <h2 className="text-lg font-semibold mb-2">
                    Name: {user?.displayName || "Not Available"}
                </h2>
                <p className="text-gray-600">
                    Email: {user?.email || "Not Available"}
                </p>
            </div>
        </div>
    );
};

export default UserDetails;
