import React, { Suspense, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import AllGroupSingleCard from '../../Components/AllGroupSingleCard/AllGroupSingleCard';
import { Fade, Slide, Zoom } from "react-awesome-reveal";

const AllGroups = () => {

    const [loading, setLoading] = useState(true)
    const allData = useLoaderData();
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

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-5 lg:m-10'>
            {
                allData.map(data => (
                    <Zoom key={data._id}>
                        <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
                            <AllGroupSingleCard data={data}></AllGroupSingleCard>
                        </Suspense>
                    </Zoom>
                ))
            }
        </div>
    );
};

export default AllGroups;