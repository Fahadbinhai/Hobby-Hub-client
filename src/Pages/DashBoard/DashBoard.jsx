import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, Outlet } from 'react-router';

const DashBoard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div className="relative min-h-screen">

            {/* Header/Navbar */}
            <div className="flex justify-between items-center bg-white shadow px-4 py-3">
                <h2 className="text-xl font-bold">Dashboard</h2>
                <button onClick={toggleSidebar} className="z-50">
                    {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Sidebar (always slide from left) */}
            <div
                className={`
          fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-4 z-50 
          transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
            >
                <h2 className="text-lg font-semibold mb-4 mt-12">Menu</h2>
                <ul className="space-y-2">
                    <li><Link to="/dashboard/overview" className="text-blue-600">Overview</Link></li>
                    <li><Link to="/dashboard/allGroups" className="text-blue-600">All Groups</Link></li>
                    <li><Link to="/dashboard/usersGroup" className="text-blue-600">Users Group</Link></li>
                </ul>
            </div>

            {/* Overlay (click to close) */}
            {isSidebarOpen && (
                <div
                    onClick={toggleSidebar}
                    className="fixed inset-0 bg-black opacity-40 z-30"
                ></div>
            )}

            {/* Main Content */}
            <div className="p-4 mt-4 md:ml-0">
                <Outlet />
            </div>
        </div>
    );
};

export default DashBoard;
