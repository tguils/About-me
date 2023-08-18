import React from 'react';
import background from '../images/background.jpg';

export default function Contact() {
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
        </div>
    );
}