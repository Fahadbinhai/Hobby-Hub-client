import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router';
import moment from 'moment';
import Swal from 'sweetalert2';

const FeatureDetails = () => {

    const { _id } = useParams();
    const singleData = useLoaderData();

    const { name, hobby, photo, meeting, description, lastDate, members, start, user, email } = singleData;
    const isExpired = moment().isAfter(moment(lastDate, "DD-MM-YYYY"));

    useEffect(() => {
        document.title = 'HobbyHuB || FeatureDetails';
    }, []);

    const handleJoinButton = () => {

        Swal.fire({
            position: "middle",
            icon: "success",
            title: "Congratulations! You have joined successfully ",
            showConfirmButton: false,
            timer: 1500
        });

    }

    return (
        <div className="container mx-auto px-4 py-10">
            <div className="card lg:card-side bg-base-100 shadow-sm max-w-7xl mx-auto">

                {/* Image */}
                <figure className="w-full lg:w-[40%] h-[300px] lg:h-[400px] p-3">
                    <img
                        src={photo}
                        alt="Hobby"
                        className="w-full h-full rounded-lg"
                    />
                </figure>

                {/* Details */}
                <div className="card-body w-full lg:w-[60%] flex flex-col justify-between">
                    <div>
                        <h2 className="card-title text-xl lg:text-2xl">Name: {name}</h2>
                        <p><span className="font-semibold">Category:</span> {hobby}</p>
                        <p><span className="font-semibold">Maximum Members:</span> {members}</p>
                        <p><span className="font-semibold">Location:</span> {meeting}</p>
                        <p><span className="font-semibold">Details:</span> {description}</p>
                        <p><span className="font-semibold">Created By:</span> {user}</p>
                        <p><span className="font-semibold">Email:</span> {email}</p>
                        <p><span className="font-semibold">Created On:</span> {start}</p>
                        <p className="text-red-600 font-medium">Last Join Date: {lastDate}</p>
                    </div>

                    <div className="card-actions justify-end mt-4">
                        {!isExpired ? (
                            <button onClick={handleJoinButton} className="btn btn-primary">Join Now</button>
                        ) : (
                            <p className="text-sm font-bold text-red-500">The group is no longer active.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureDetails;
