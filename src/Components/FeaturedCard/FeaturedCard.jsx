import React from 'react';
import { Link } from 'react-router';

const FeaturedCard = ({ feature }) => {

    const {_id, name, photo, meeting, description } = feature



    return (
        <Link to={`feature-details/${_id}`} className="card bg-[#FFF7ED] w-full h-full shadow-sm hover:shadow-lg transition duration-200">
            <figure className='h-[180px] overflow-hidden'>
                <img
                    className="w-full h-full object-cover"
                    src={photo}
                    alt="Hobby" />
            </figure>
            <div className="card-body">
                <h2 className="card-title"> {name} </h2>
                <p> <span className='font-medium text-base'>Location:</span> {meeting} </p>
                <p> <span className='font-medium text-base'>Info:</span> {description} </p>

            </div>
        </Link>
    );
};

export default FeaturedCard;