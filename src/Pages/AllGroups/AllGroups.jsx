import React, { Suspense, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import AllGroupSingleCard from '../../Components/AllGroupSingleCard/AllGroupSingleCard';
import { Fade, Slide, Zoom } from "react-awesome-reveal";

const AllGroups = () => {

    const allData = useLoaderData();
    // console.log(allData)

    useEffect(() => {
        document.title = 'HobbyHuB || AllGroups';
    }, []);


    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-7 mt-5 lg:m-10'>
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