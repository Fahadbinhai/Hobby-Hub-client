import React from 'react';
import logo from '../../assets/images/hobby-hub-logo.png'
import { Link } from 'react-router';

const Header = () => {


    const links = <>

        <Link className={({ isActive }) => isActive ? " text-blue-700 underline" : ""}> Home </Link>
        <Link className={({ isActive }) => isActive ? " text-blue-700 underline" : ""}> All Groups </Link>
        <Link className={({ isActive }) => isActive ? " text-blue-700 underline" : ""}> Create Group </Link>
        <Link className={({ isActive }) => isActive ? " text-blue-700 underline" : ""}> My Groups</Link>


    </>


    return (
        <div className="navbar bg-[#E0F2FE] shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div className='flex items-center gap-2'>
                    <img className='rounded lg:w-15 lg:h-15 lg:block hidden' src={logo} alt="" />
                    <h3 className="font-bold text-lg lg:text-2xl lg:ml-4">HobbyHuB</h3>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <div className='flex flex-col lg:flex-row space-x-5 font-medium text-lg'>
                        {
                            links
                        }
                    </div>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Header;