import React from 'react';
import './../App.css';

export default function Navbar() {
    return (
      <div className=" top-0 shadow-md opacity-100 p-4 fixed w-full z-10" style={{ backgroundColor: "4C6793" }}>
        <div className="container d-flex justify-content-between align-items-center">
          <div className="text-gray-800 fs-1 font-weight-bold" style={{ color: "F0EB8D" }}>My Portfolio</div>
          <a href="#" className="text-gray-800 fs-4 nav-link" style={{ color: "F0EB8D" }}>Home</a>
          <a href="#" className="text-gray-800 fs-4 nav-link" style={{ color: "F0EB8D" }}>About Me</a>
          <a href="#" className="text-gray-800 fs-4 nav-link" style={{ color: "F0EB8D" }}>Projects</a>
          <a href="#" className="text-gray-800 fs-4 nav-link" style={{ color: "F0EB8D" }}>Contact</a>
        </div>
      </div>
    );
  }
            
   
