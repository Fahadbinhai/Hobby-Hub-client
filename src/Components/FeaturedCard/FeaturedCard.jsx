import React from 'react';
import { Link } from 'react-router';

const FeaturedCard = ({ feature }) => {

    const { id, coverImage, title, location, shortDescription } = feature



    return (
        <Link to={`feature-details/${id}`} className="card bg-[#FFF7ED] w-[400px] lg:w-[500px] lg:h-[350px] mx-auto shadow-sm">
            <figure>
                <img
                    src={coverImage}
                    alt="Hobby" />
            </figure>
            <div className="card-body">
                <h2 className="card-title"> {title} </h2>
                <p> Location: {location} </p>
                <p> Info: {shortDescription} </p>

            </div>
        </Link>
    );
};

export default FeaturedCard;