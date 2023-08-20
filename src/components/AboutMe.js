import React from 'react';
import './../App.css';
import aboutmeImage from '../images/aboutmeImage.png';


export default function AboutMe() {
    return (
        <div  id='AboutMe' className='background-image'>
        <div className='container-sm d-flex flex-column align-items-center justify-content-center position-relative p-0' style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.25)', height: '900px' }} >
            <div className=" justify-content-center align-items-center ">
                    <p className='fs-5 text-white justify-content-center align-items-center '>
                        My name is Tess
                    </p>
            </div>
            <div className=" mt-4 d-flex border border-primary rounded" style={{ height: '300px', width: '300px', margin: '100px auto', backgroundSize: 'cover', backgroundImage: `url(${aboutmeImage})` }}>
        </div>
        </div>
        </div>
    )
}