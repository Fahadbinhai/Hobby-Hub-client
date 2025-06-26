import React, { useEffect, useState } from 'react';

const AllGroupsTable = () => {

    const [tableData, setTableData] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setLoading(true)
        fetch('https://assignment-10-hobby-server.vercel.app/hobbies')
            .then(res => res.json())
            .then(data => {
                setTableData(data)
                setLoading(false)
            })

    }, [])

    // console.log(tableData)

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-dots loading-lg text-blue-500"></span>
            </div>
        )
    }



    return (
        <div>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Meeting Place</th>
                            <th>Total Member</th>
                            <th>Last Date of joining</th>
                            <th>Created by</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            tableData?.map((table, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{table.name} </td>
                                    <td>{table.hobby} </td>
                                    <td>{table.meeting}</td>
                                    <td>{table.members}</td>
                                    <td>{table.lastDate}</td>
                                    <td>{table.user}</td>
                                    <td>{table.email}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllGroupsTable;