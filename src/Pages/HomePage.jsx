import React, { Suspense, useEffect, useState } from 'react';
import Sliders from '../Components/Slider/Sliders';
import FeaturedCard from '../Components/FeaturedCard/FeaturedCard';
import { Link } from 'react-router';
import { FaHandPointRight } from "react-icons/fa";
import { Fade, Slide, Zoom } from "react-awesome-reveal";


const HomePage = () => {

    const [featured, setFeatured] = useState([]);








    console.log(featured)

    useEffect(() => {
        fetch('http://localhost:3000/hobbies')
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
                        featured.slice(0, 6).map(feature => (
                            <Fade key={feature._id}>
                                <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
                                    <FeaturedCard feature={feature} />
                                </Suspense>
                            </Fade>
                        ))
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

            {/* bg-[#FFF7ED] */}

            {/* static section 1 */}

            <Slide>
                <h3 className='font-bold text-2xl m-4'>Hobbies in Categories</h3>
                <div className='grid grid-cols-1 lg:grid-cols-4 '>

                    <div className="card bg-[#FFF7ED] text-black w-96 border mx-auto mb-4">
                        <div className="card-body">
                            <h2 className="card-title"> Creative Hobbies</h2>
                            <p className='flex items-center gap-2'> <FaHandPointRight /> Drawing & Painting</p>
                            <p className='flex items-center gap-2' > <FaHandPointRight /> Photography</p>
                            <p className='flex items-center gap-2' ><FaHandPointRight />Writing</p>
                            <p className='flex items-center gap-2' ><FaHandPointRight />Calligraphy</p>

                        </div>
                    </div>
                    <div className="card bg-[#FFF7ED] text-black w-96 border mx-auto mb-4">
                        <div className="card-body">
                            <h2 className="card-title"> Music & Performing Arts</h2>
                            <p className='flex items-center gap-2' > <FaHandPointRight /> Playing Guitar</p>
                            <p className='flex items-center gap-2' > <FaHandPointRight /> Singing</p>
                            <p className='flex items-center gap-2' > <FaHandPointRight /> Dancing</p>
                            <p className='flex items-center gap-2' > <FaHandPointRight /> Acting</p>

                        </div>
                    </div>
                    <div className="card bg-[#FFF7ED] text-black w-96 border mx-auto mb-4">
                        <div className="card-body">
                            <h2 className="card-title"> Intellectual Hobbies</h2>
                            <p className='flex items-center gap-2' > <FaHandPointRight /> Reading Books</p>
                            <p className='flex items-center gap-2' > <FaHandPointRight /> Chess</p>
                            <p className='flex items-center gap-2' > <FaHandPointRight /> Coding</p>
                            <p className='flex items-center gap-2' > <FaHandPointRight /> Learning Language</p>

                        </div>
                    </div>
                    <div className="card bg-[#FFF7ED] text-black w-96 border mx-auto">
                        <div className="card-body">
                            <h2 className="card-title"> Health & Wellness</h2>
                            <p className='flex items-center gap-2' > <FaHandPointRight /> Yoga</p>
                            <p className='flex items-center gap-2' > <FaHandPointRight /> Gym</p>
                            <p className='flex items-center gap-2' > <FaHandPointRight /> Running</p>
                            <p className='flex items-center gap-2' > <FaHandPointRight /> Hiking</p>

                        </div>
                    </div>
                </div>
            </Slide>


            {/* Static section 2 */}

            <Slide>
                <div>
                    <h3 className='font-bold text-2xl m-4'>A Quick Glance at Our Journey</h3>
                    <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
                        <div className="card bg-[#FFF7ED] text-black w-96 border mx-auto">
                            <div className="card-body">
                                <h2 className="card-title"> Total Hobby Groups</h2>
                                <p className='font-bold text-5xl m-4'>120+</p>
                                <p>Created by users</p>

                            </div>
                        </div>
                        <div className="card bg-[#FFF7ED] text-black w-96 border mx-auto">
                            <div className="card-body">
                                <h2 className="card-title"> Active Members</h2>
                                <p className='font-bold text-5xl m-4'>1020+</p>
                                <p>	Who joined different groups</p>
                            </div>
                        </div>
                        <div className="card bg-[#FFF7ED] text-black w-96 border mx-auto">
                            <div className="card-body">
                                <h2 className="card-title"> Event Hosted</h2>
                                <p className='font-bold text-5xl m-4'>90+</p>
                                <p>	Offline/Online hobby meetups</p>
                            </div>
                        </div>
                        <div className="card bg-[#FFF7ED] text-black w-96 border mx-auto">
                            <div className="card-body">
                                <h2 className="card-title"> Hobbies Covered</h2>
                                <p className='font-bold text-5xl m-4'>20+</p>
                                <p>	Different categories on the platform</p>

                            </div>
                        </div>
                    </div>
                </div>
            </Slide>
        </div>
    );
};

export default HomePage;