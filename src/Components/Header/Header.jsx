import React, { useContext } from 'react';
import logo from '../../assets/images/hobby-hub-logo.png'
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../ContextProvider/ContextProvider';

const Header = () => {

    const { user, logout } = useContext(AuthContext)

    const links = <>

        <NavLink to='/' className={({ isActive }) => isActive ? " underline text-blue-700" : ""}>Home</NavLink>

        <NavLink to='/all-group' className={({ isActive }) => isActive ? "text-blue-700 underline" : ""}>All Groups</NavLink>

        <NavLink to='/new-hobby-group' className={({ isActive }) => isActive ? "text-blue-700 underline" : ""}>Create Groups</NavLink>

        <NavLink to='/my-groups' className={({ isActive }) => isActive ? "text-blue-700 underline" : ""}>My Groups</NavLink>
    </>

    const handleLogOut = () => {
        logout()
    }


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
            <div className="navbar-end space-x-3">
                {
                    user ?
                        <>
                            <div className="relative group">
                                <img src={user?.photoURL} className="w-10 h-10 rounded-full border border-blue-500 cursor-pointer" />
                                <div className="absolute left-0 mt-1 hidden group-hover:block bg-white text-sm shadow px-3 py-1 w-[100px] rounded">
                                    {user?.displayName}
                                </div>
                            </div>
                            <button onClick={handleLogOut} className="btn bg-red-400">Logout</button>
                        </>
                        :
                        <Link to='/login' className="btn bg-blue-400">Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;