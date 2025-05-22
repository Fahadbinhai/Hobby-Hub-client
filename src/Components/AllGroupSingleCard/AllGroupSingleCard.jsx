import React from 'react';
import { Link } from 'react-router';

const AllGroupSingleCard = ({ data }) => {

    const {_id,photo, name, meeting, description } = data

    console.log(_id)



    return (
        <div className="card bg-[#FFF7ED] w-[400px] lg:w-[500px] lg:h-[450px] mx-auto shadow-sm">
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
            <div className="card-actions justify-end m-5">
                <Link to={`/feature-details/${_id}`} className="btn btn-primary">See More</Link>
            </div>
        </div>
    );
};

export default AllGroupSingleCard;