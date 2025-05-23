import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Components/ContextProvider/ContextProvider';
import { Link} from 'react-router';
import Swal from 'sweetalert2';

const MyGroups = () => {
    const { user } = useContext(AuthContext);
    const [myGroups, setMyGroups] = useState([]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/hobbies/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data?.deletedCount > 0) {
                            Swal.fire("Deleted!", "Your Group has been deleted.", "success");
                            // Filter out deleted item
                            const remaining = myGroups.filter(group => group._id !== id);
                            setMyGroups(remaining);
                        }
                    });
            }
        });
    };

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/myGroup/${user.email}`)
                .then(res => res.json())
                .then(data => setMyGroups(data));
        }
    }, [user]);

    return (
        <div className="p-5">
            <h2 className="text-2xl font-bold mb-4 text-center">My Created Hobby Groups</h2>

            {
                myGroups.length === 0 ? (
                    <p className="text-center text-gray-500">No groups created yet.</p>
                ) : (
                    <>
                        
                        <div className="hidden md:block overflow-x-auto">
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
                                                    <Link to={`/update-group/${group._id}`} className="btn btn-sm btn-warning">Update</Link>
                                                    <button
                                                        onClick={() => handleDelete(group._id)}
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

                        {/* ✅ Card view for small screen */}
                        <div className="md:hidden space-y-4">
                            {
                                myGroups.map((group, index) => (
                                    <div key={group._id} className="border p-4 rounded-lg shadow-md">
                                        <p className="text-sm text-gray-500">#{index + 1}</p>
                                        <h3 className="text-lg font-bold">{group.name}</h3>
                                        <p><span className="font-semibold">Hobby:</span> {group.hobby}</p>
                                        <p><span className="font-semibold">Description:</span> {group.description}</p>
                                        <p><span className="font-semibold">Meeting:</span> {group.meeting}</p>
                                        <div className="mt-3 space-x-2">
                                            <Link to={`/update-group/${group._id}`} className="btn btn-sm btn-warning">Update</Link>
                                            <button
                                                onClick={() => handleDelete(group._id)}
                                                className="btn btn-sm btn-error"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </>
                )
            }
        </div>
    );
};

export default MyGroups;
