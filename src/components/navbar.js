import React from 'react';
import './../App.css';

export default function Navbar() {
    return (
        <div className='navbar shadow-md p-4 fixed w-full flex items-center justify-between z-10 bg-opacity-75'>
            <div className='flex items-center justify-between'>
                <div className='text-gray-800 font-bold'> My Website </div>
                <a href='#' className='text-gray-800 hover:text-blue-500 mx-10 transition duration-300'> Home </a>
                <a href='#' className='text-gray-800 hover:text-blue-500 mx-10 transition duration-300'> About Me</a>
                <a href='#' className='text-gray-800 hover:text-blue-500 mx-10 transition duration-300'> Projects</a>
                <a href='#' className='text-gray-800 hover:text-blue-500 mx-10 transition duration-300'> Contact</a>
        

            </div>

        </div>
        
    );
}
