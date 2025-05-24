import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router';
import moment from 'moment';

const FeatureDetails = () => {

    const { _id } = useParams();

    const singleData = useLoaderData();

    const { name,hobby, photo, meeting, description, lastDate, members,start,user,email } = singleData

    // console.log(singleData)

    const isExpired = moment().isAfter(moment(lastDate, "DD-MM-YYYY"));


     useEffect(() => {
            document.title = 'HobbyHuB || FeatureDetails';
        }, []);



    return (

        <div className="card bg-base-100 w-[400px] mx-auto my-20 shadow-sm">
            <figure>
                <img
                    src={photo}
                    alt="Hobby" />
            </figure>
            <div className="card-body">
                <h2 className="card-title"> {name} </h2>
                <p> Category: {hobby} </p>
                <p> Maximum Members: {members} </p>
                <p> Location: {meeting} </p>
                <p> Details: {description} </p>
                <p> Created By: {user} </p>
                <p> Email: {email} </p>
                <p> Created on: {start} </p>
                <p className='text-red-600'> Last Join Date: {lastDate} </p>

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