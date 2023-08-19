import React from 'react';
import './../App.css';

export default function Navbar() {
    return (
      <div className="bg-white top-0 shadow-md opacity-100 p-4 fixed w-full z-10" style={{ backgroundColor: "white" }}>
        <div className="container d-flex justify-content-between align-items-center">
          <div className="h2 text-gray-800 font-weight-bold">My Website</div>
          <a href="#" className="text-gray-800 nav-link">Home</a>
          <a href="#" className="text-gray-800 nav-link">About Me</a>
          <a href="#" className="text-gray-800 nav-link">Projects</a>
          <a href="#" className="text-gray-800 nav-link">Contact</a>
        </div>
      </div>
    );
  }
            
   
