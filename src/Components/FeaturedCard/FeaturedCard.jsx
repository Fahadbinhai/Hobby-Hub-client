import React from 'react';
import { Link } from 'react-router';

const FeaturedCard = ({ feature }) => {

    const {_id, name, photo, meeting, description } = feature



    return (
        <Link to={`feature-details/${_id}`} className="card bg-[#FFF7ED] w-[400px] lg:w-[500px] lg:h-[350px] mx-auto shadow-sm">
            <figure>
                <img
                    src={photo}
                    alt="Hobby" />
            </figure>
            <div className="card-body">
                <h2 className="card-title"> {name} </h2>
                <p> Location: {meeting} </p>
                <p> Info: {description} </p>

            </div>
        </Link>
    );
};

export default FeaturedCard;