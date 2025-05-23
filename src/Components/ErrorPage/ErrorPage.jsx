import React from 'react';
import error from '../../assets/images/Error.jpg'

const ErrorPage = () => {
    return (
        <div>
            <img className='w-full h-screen mx-auto' src={error} alt="" />
        </div>
    );
};

export default ErrorPage;