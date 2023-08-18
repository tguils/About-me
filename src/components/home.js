import React from 'react';
import Navbar from './Navbar';
import background from '../images/background.jpg';

export default function Home() {
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
            <Navbar /> 
        </div>
    );
}