import React, { useEffect, useState } from 'react';
import Sliders from '../Components/Slider/Sliders';
import FeaturedCard from '../Components/FeaturedCard/FeaturedCard';

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
            <Sliders></Sliders>
            

            <div>
                <h3>Featured Group</h3>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 my-5 lg:ml-8'>

                    {
                        featured.map(feature => <FeaturedCard key={feature.id} feature={feature}></FeaturedCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HomePage;