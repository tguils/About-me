
import React from 'react';

import './../App.css';
import projectsImage from '../images/projectsImage.png'; 

export default function Projects() {
    return (
        <div className='background-image'>
        <div className='projects-container container-sm d-flex justify-content-center align-items-center' >
            <div className='row'>
                <div className='col-md-4 col-sm-6 mb-2 d-flex justify-content-center'>
                
                    <div className='project-1 p-2 border border-1 border-primary' style={{ height: '300px', width: '300px', marginTop: '30px', backgroundSize: 'cover', backgroundImage: `url(${projectsImage})`}}> 
                    <h1 className='text-center text-white position-absolute top-50 start-50 translate-middle fs-2 text-opacity-75' style={{ zIndex: 1 }}> Daily Calendar</h1>
                    <div className='button-container'>
                    <button className='btn btn-light btn-sm hidden-btn live-btn'>Live</button>
                    <button className='btn btn-light btn-sm hidden-btn repo-btn'>Repo</button>
                </div>
                    </div>
                    
                
                    
                </div>
                <div className='col-md-4 col-sm-6 mb-2 d-flex justify-content-center'>
                    <div className='project-2 p-2 border border-1 border-primary' style={{ height: '300px', width: '300px', marginTop: '30px' }}>
                    <div className='button-container'>
                    <button className='btn btn-primary btn-sm hidden-btn live-btn'>Live</button>
                    <button className='btn btn-light btn-sm hidden-btn repo-btn'>Repo</button>
                </div>
                    </div>
                </div>
                <div className='col-md-4 col-sm-6 mb-2 d-flex justify-content-center'>
                    <div className='project-3 p-2 border border-1 border-primary' style={{ height: '300px', width: '300px', marginTop: '30px' }}>
                    <div className='button-container'>
                    <button className='btn btn-primary btn-sm hidden-btn live-btn'>Live</button>
                    <button className='btn btn-light btn-sm hidden-btn repo-btn'>Repo</button>
                </div>
                    </div>
                </div>
                <div className='col-md-6 col-sm-12 mb-2 d-flex justify-content-center' style={{ marginTop: '30px' }}>
                    <div className='project-4 p-2 border border-1 border-primary' style={{ height: '300px', width: '300px' }}>
                    <div className='button-container'>
                    <button className='btn btn-primary btn-sm hidden-btn live-btn'>Live</button>
                    <button className='btn btn-light btn-sm hidden-btn repo-btn'>Repo</button>
                </div>
                    </div>
                </div>
                <div className='col-md-6 col-sm-12 mb-2 d-flex justify-content-center' style={{ marginTop: '30px' }}>
                    <div className='project-5 p-2 border border-1 border-primary' style={{ height: '300px', width: '300px' }}>
                    <div className='button-container'>
                    <button className='btn btn-primary btn-sm hidden-btn live-btn'>Live</button>
                    <button className='btn btn-light btn-sm hidden-btn repo-btn'>Repo</button>
                </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}