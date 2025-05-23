import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Components/ContextProvider/ContextProvider';
import Swal from 'sweetalert2';

const Register = () => {

    const { register } = useContext(AuthContext)
    const navigate = useNavigate()


    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;
        const userName = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        // console.log(userName,email,photo,password)

        register(userName, email, photo, password)

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "You have Register Successfully",
            showConfirmButton: false,
            timer: 1500
        });

        navigate('/')



    }


     useEffect(() => {
            document.title = 'HobbyHuB || Register';
        }, []);

    return (
        <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-blue-100 dark:text-gray-800 mx-auto my-30">
            <h2 className="mb-3 text-3xl font-semibold text-center">Create an Account</h2>
            <p className="text-sm text-center dark:text-gray-600">Don't have account?
                <Link to='/login' className='underline text-blue-500'> Login </Link>
            </p>
            {/* <div className="my-6 space-y-4">
                <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600 hover:bg-blue-500 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                    </svg>
                    <p>Login with Google</p>
                </button>

            </div> */}
            {/* <div className="flex items-center w-full my-4">
                <hr className="w-full dark:text-gray-600" />
                <p className="px-3 dark:text-gray-600">OR</p>
                <hr className="w-full dark:text-gray-600" />
            </div> */}
            <form onSubmit={handleRegister} className="space-y-8">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm">Name</label>
                        <input type="text" name="name" id="name" placeholder="Enter Your Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm">Email address</label>
                        <input type="email" name="email" id="email" placeholder="Enter Email " className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm">Photo URL</label>
                        <input type="text" name="photo" id="photo" placeholder="Enter Photo URL" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm">Password</label>
                        <input type="password" name="password" id="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" title="Must be more than 6 characters, including number, lowercase letter, uppercase letter" placeholder="Enter your password" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                </div>
                <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Register</button>
            </form>
        </div>
    );
};

export default Register;