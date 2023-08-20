
import React from 'react';
import './../App.css';

export default function Projects() {
    return (
        <div className='projects-container  row container-lg  d-flex justify-content-center align-items-center ' style={{margin: '10em'}}>
             <div className='col-md-4 col-sm-6 mb-2 d-flex justify-content-center'>
                    <div className='project-1 p-2 border border-1 border-primary' style={{ height: '200px', width: '200px' }}></div>
                </div>
                <div className='col-md-4 col-sm-6 mb-2 d-flex justify-content-center'>
                    <div className='project-1 p-2 border border-1 border-primary' style={{ height: '200px', width: '200px' }}></div>
                </div>
                <div className='col-md-4 col-sm-6 mb-2 d-flex justify-content-center'>
                    <div className='project-1 p-2 border border-1 border-primary' style={{ height: '200px', width: '200px' }}></div>
                </div>
                <div className='col-md-6 col-sm-6 mb-2 d-flex justify-content-center'>
                    <div className='project-1 p-2 border border-1 border-primary' style={{ height: '200px', width: '200px' }}></div>
                </div>
            <div className='col-md-6 col-sm-6 mb-2 d-flex justify-content-center'>
                    <div className='project-1 p-2 border border-1 border-primary' style={{ height: '200px', width: '200px' }}></div>
                </div>
        </div>
    );
}