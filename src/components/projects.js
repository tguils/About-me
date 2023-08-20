
import React from 'react';

import './../App.css';

export default function Projects() {
    return (
        <div className='background-image'>
        <div className='projects-container container-sm d-flex justify-content-center align-items-center' >
            <div className='row'>
                <div className='col-md-4 col-sm-6 mb-2 d-flex justify-content-center'>
                    <div className='project-1 p-2 border border-1 border-primary' style={{ height: '200px', width: '200px', marginTop: '30px' }}>
                    
                </div>
                <div className='button-container'>
                    <button className='btn btn-light btn-sm hidden-btn'>Click Me</button>
                    </div>
                </div>
                <div className='col-md-4 col-sm-6 mb-2 d-flex justify-content-center'>
                    <div className='project-1 p-2 border border-1 border-primary' style={{ height: '200px', width: '200px', marginTop: '30px' }}>
                    <div className='button-container'>
                    <button className='btn btn-primary btn-sm hidden-btn'>Click Me</button>
                </div>
                    </div>
                </div>
                <div className='col-md-4 col-sm-6 mb-2 d-flex justify-content-center'>
                    <div className='project-1 p-2 border border-1 border-primary' style={{ height: '200px', width: '200px', marginTop: '30px' }}>
                    <div className='button-container'>
                    <button className='btn btn-primary btn-sm hidden-btn'>Click Me</button>
                </div>
                    </div>
                </div>
                <div className='col-md-6 col-sm-12 mb-2 d-flex justify-content-center' style={{ marginTop: '30px' }}>
                    <div className='project-1 p-2 border border-1 border-primary' style={{ height: '200px', width: '200px' }}>
                    <div className='button-container'>
                    <button className='btn btn-primary btn-sm hidden-btn'>Click Me</button>
                </div>
                    </div>
                </div>
                <div className='col-md-6 col-sm-12 mb-2 d-flex justify-content-center' style={{ marginTop: '30px' }}>
                    <div className='project-1 p-2 border border-1 border-primary' style={{ height: '200px', width: '200px' }}>
                    <div className='button-container'>
                    <button className='btn btn-primary btn-sm hidden-btn'>Click Me</button>
                </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}