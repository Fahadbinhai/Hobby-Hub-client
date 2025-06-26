import React, { Suspense, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import AllGroupSingleCard from '../../Components/AllGroupSingleCard/AllGroupSingleCard';
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { FaFilter } from 'react-icons/fa';

const AllGroups = () => {

    const [loading, setLoading] = useState(true)
    const allData = useLoaderData();
    const [allGroups, setAllGroups] = useState(allData)
    // console.log(allData)

    useEffect(() => {

        if (allData) {
            setLoading(false)
        }

    }, [allData])

    useEffect(() => {
        document.title = 'HobbyHuB || AllGroups';
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-dots loading-lg text-blue-500"></span>
            </div>
        );
    }

    const handleSorting = () => {

        fetch('https://assignment-10-hobby-server.vercel.app/sortHobbies')
        .then(res=>res.json())
        .then(data=> setAllGroups(data))

    }



    return (
        <div>

            <div className='mt-5 flex justify-end'>
                <button onClick={handleSorting} className='btn btn-primary '> <FaFilter /> Latest</button>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-2 lg:m-10'>

                {
                    allGroups.map(data => (
                        <Zoom key={data._id}>
                            <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
                                <AllGroupSingleCard data={data}></AllGroupSingleCard>
                            </Suspense>
                        </Zoom>
                    ))
                }
            </div>
        </div>
    );
};

export default AllGroups;