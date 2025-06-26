import React from 'react';
import SliderLib from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Sliders = () => {


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };


    return (
        <div className='mt-5'>
            <SliderLib {...settings}>
                <div className="relative h-[40vh] md:h-[40vh] lg:h-[70vh]">
                    <img
                        src="https://i.ibb.co/XhXNpD6/bookwarm.jpg"
                        alt="pic1"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 text-white text-xl bg-opacity-50 bg-black px-4 py-2">
                        Hobby Reading......!!!!
                    </div>
                </div>

                <div className="relative h-[40vh] md:h-[40vh] lg:h-[70vh]">
                    <img
                        src="https://i.ibb.co/jkprFs6y/Reading-book.jpg"
                        alt="pic2"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 text-white text-xl bg-opacity-50 bg-black px-4 py-2">
                        Hobby Reading......!!!!
                    </div>
                </div>

                <div className="relative h-[40vh] md:h-[40vh] lg:h-[70vh]">
                    <img
                        src="https://i.ibb.co/rG51Z0jB/cooking.jpg"
                        alt="pic3"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 text-white text-xl bg-opacity-50 bg-black px-4 py-2">
                        Hobby Cooking......!!!!
                    </div>
                </div>
            </SliderLib>
        </div>

    );
};

export default Sliders;