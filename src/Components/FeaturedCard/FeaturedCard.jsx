import React from 'react';

const FeaturedCard = ({feature}) => {

    const {coverImage,title,location,shortDescription} = feature
    


    return (
        <div className="card bg-base-100 w-[400px] mx-auto shadow-sm">
            <figure>
                <img
                    src={coverImage}
                    alt="Hobby" />
            </figure>
            <div className="card-body">
                <h2 className="card-title"> {title} </h2>
                <p> Location: {location} </p>
                <p> Info: {shortDescription} </p>
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div> */}
            </div>
        </div>
    );
};

export default FeaturedCard;