import React from 'react';
import { Link } from 'react-router';
import { Tooltip } from 'react-tooltip'; 

const AllGroupSingleCard = ({ data }) => {
    const { _id, photo, name, meeting, description } = data;

    return (
        <div className="card bg-[#FFF7ED] w-full h-[450px] mx-auto shadow-sm">
            <figure className="h-[200px] overflow-hidden">
                <img className="w-full h-full object-cover" src={photo} alt="Hobby" />
            </figure>

            <div className="card-body">
                <h2 className="card-title"> {name} </h2>
                <p> <span className='font-semibold'>Location:</span> {meeting} </p>
                <p> <span className='font-semibold'>Info:</span> {description} </p>
            </div>

            <div className="card-actions justify-end m-5">
                <Link
                    to={`/feature-details/${_id}`}
                    className="btn btn-primary"
                    data-tooltip-id={`seeMore-${_id}`}
                    data-tooltip-content="Click to see details"
                >
                    See More
                </Link>

                <Tooltip
                    id={`seeMore-${_id}`}
                    place="top"
                    style={{ backgroundColor: '#0ea5e9', color: '#fff' }}
                />
            </div>
        </div>
    );
};

export default AllGroupSingleCard;
