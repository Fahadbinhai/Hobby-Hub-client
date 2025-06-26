import React, { useEffect, useState } from 'react';
import SingleColorPie from '../../../SingleColorPie/SingleColorPie';
import { FaHandPointRight } from 'react-icons/fa';
import { AuthContext } from '../../../Components/ContextProvider/ContextProvider';

const OverView = () => {

    const [allData, setAllData] = useState([])
    const [nameField, setNameField] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch('https://assignment-10-hobby-server.vercel.app/hobbies')
            .then(res => res.json())
            .then(data => {
                setAllData(data)
                setLoading(false)
            })
    }, [])

    useEffect(() => {

        fetch('http://localhost:3000/groupNames')
            .then(res => res.json())
            .then(group => setNameField(group))

    }, [])

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-dots loading-lg text-blue-500"></span>
            </div>
        )
    }

    // console.log(user)
    return (
        <div className='grid grid-cols-1 md:grid-cols-10 gap-3'>
            <div className='col-span-5 h-[20rem]'>

                <div className='bg-red-200 rounded-lg w-full h-full flex justify-around items-center p-5 mx-auto'>
                    <div className='text-medium font-semibold'>
                        Total Hobby Groups : {allData.length}
                    </div>
                    <div className='w-[200px]'>
                        <SingleColorPie></SingleColorPie>
                    </div>
                </div>
            </div>

            <div className='col-span-5 h-[20rem]'>
                <div className='bg-green-200 rounded-lg w-full h-full'>
                    <p className='text-center font-extrabold text-lg pt-2'>some Popular Groups</p>

                    <div className='grid grid-cols-1 mt-4'>
                        {
                            nameField.slice(0, 9).map((nam, index) => {
                                return (
                                    <div className='ml-10' key={index}>
                                        <ul className='font-semibold'>
                                            <li className='flex gap-2 items-center'> <FaHandPointRight /> {nam.name}</li>
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OverView;