import React from 'react';
import background from '../images/background.jpg';

export default function Navbar() {
    return (
        <div
        style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            minHeight: '100vh'
        }}
        >
        <div className='bg-white shadow-md p-4 fixed w-full'>
            <div className='flex items-center justify-between'>
                <div className='text-gray-800 font-bold'> My Website </div>
                <a href='#' className='text-gray-800 hover:text-blue-500 mx-10 transition duration-300'> Home </a>
                <a href='#' className='text-gray-800 hover:text-blue-500 mx-10 transition duration-300'> About Me</a>
                <a href='#' className='text-gray-800 hover:text-blue-500 mx-10 transition duration-300'> Projects</a>
                <a href='#' className='text-gray-800 hover:text-blue-500 mx-10 transition duration-300'> Contact</a>
        

            </div>

        </div>
        </div>
    );
}
