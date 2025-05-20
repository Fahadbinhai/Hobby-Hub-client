import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import moment from 'moment';

const FeatureDetails = () => {

    const allData = useLoaderData();
    const { id } = useParams();

    const singleData = allData.find(data => data.id == id);

    const { coverImage, title, location, details, lastJoinDate, category } = singleData

    console.log(singleData)

    const isExpired = moment().isAfter(moment(lastJoinDate));



    return (

        <div className="card bg-base-100 w-[400px] mx-auto my-20 shadow-sm">
            <figure>
                <img
                    src={coverImage}
                    alt="Hobby" />
            </figure>
            <div className="card-body">
                <h2 className="card-title"> {title} </h2>
                <p> Category: {category} </p>
                <p> Location: {location} </p>
                <p> Details: {details} </p>
                <p className='text-red-600'> Last Join Date: {lastJoinDate} </p>

                <div className="card-actions justify-end">
                    {!isExpired ? (
                        <button className="btn btn-primary">Join Now</button>
                    ) : (
                        <p className="text-sm font-bold text-red-500">The group is no longer active.</p>
                    )}
                </div>

            </div>
        </div>




    );
};

export default FeatureDetails;