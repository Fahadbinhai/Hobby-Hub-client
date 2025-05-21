import React, { Suspense } from 'react';
import { useLoaderData } from 'react-router';
import AllGroupSingleCard from '../../Components/AllGroupSingleCard/AllGroupSingleCard';

const AllGroups = () => {

    const allData = useLoaderData();
    console.log(allData)


    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-7 m-10'>
            {
                allData.map(data => (
                    <Suspense key={data._id} fallback={<span className="loading loading-dots loading-xl"></span>}>
                        <AllGroupSingleCard data={data}></AllGroupSingleCard>
                    </Suspense>
                ))
            }
        </div>
    );
};

export default AllGroups;