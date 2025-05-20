import React, { useEffect, useState } from 'react';
import Sliders from '../Components/Slider/Sliders';
import FeaturedCard from '../Components/FeaturedCard/FeaturedCard';
import { Link } from 'react-router';

const HomePage = () => {

    const [featured, setFeatured] = useState([]);

    // console.log(featured)

    useEffect(() => {
        fetch('/dummyData.json')
            .then(res => res.json())
            .then(data => setFeatured(data))
    }, [])


    return (
        <div>
            {/* slider */}
            <Sliders></Sliders>

            {/* featured section hobby */}
            <div className='lg:border-2 my-4 rounded-lg mx-3 lg:bg-[#E0F2FE]'>
                <h3 className='font-bold lg:font-extrabold text-xl lg:text-2xl lg:m-5 lg:pl-5'>Featured Group</h3>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 my-5 lg:ml-8 '>

                    {
                        featured.map(feature => <FeaturedCard key={feature.id} feature={feature}></FeaturedCard>)
                    }
                </div>
            </div>


            {/* create new hobby group */}
            <div className='border-2 w-full mx-auto my-5 rounded-lg'>

                <Link to='/new-hobby-group' className="card lg:w-full mx-auto bg-[#E0F2FE] card-lg shadow-sm p-5">
                    <div>
                        {/* <h3 className='text-center font-light text-3xl'>Create your own Hobby group</h3>
                        <button className='btn btn-primary w-full h-52 mt-5'>Create Group</button> */}

                        <h3 className='text-center font-light text-3xl mb-4 text-blue-400'>Create your own Hobby group</h3>
                        <button className="btn btn-dash btn-info w-full h-20 text-4xl font-normal">Create</button>
                        
                    </div>
                </Link>

            </div>
        </div>
    );
};

export default HomePage;