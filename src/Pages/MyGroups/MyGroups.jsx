import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Components/ContextProvider/ContextProvider';

const MyGroups = () => {

    const { user } = useContext(AuthContext)
    const [myGroups, setMyGroups] = useState([]);



    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/myGroup/${user.email}`)
                .then(res => res.json())
                .then(data => setMyGroups(data))
        }
    }, [user])


    return (
        <div className="p-5">
            <h2 className="text-2xl font-bold mb-4">My Created Hobby Groups</h2>

            {
                myGroups.length === 0 ? (
                    <p>No groups created yet.</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="table w-full border">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th>#</th>
                                    <th>Group Name</th>
                                    <th>Hobby</th>
                                    <th>Description</th>
                                    <th>Meeting</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    myGroups.map((group, index) => (
                                        <tr key={group._id}>
                                            <td>{index + 1}</td>
                                            <td>{group.name}</td>
                                            <td>{group.hobby}</td>
                                            <td>{group.description}</td>
                                            <td>{group.meeting}</td>
                                            <td className="space-x-2">
                                                <button className="btn btn-sm btn-warning">Update</button>
                                                <button
                                                    className="btn btn-sm btn-error"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                )
            }
        </div>
    );
};

export default MyGroups;