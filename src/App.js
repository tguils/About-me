
import React from 'react';
import Aboutme from './components/AboutMe';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';
import background from './images/background.jpg';
import './App.css';

  export default function App() {
    return (
      <main style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', }} className=" h-screen">
        <Navbar />
        <Home />
        <Aboutme />
        <Projects />
        <Contact />
      </main>
    );
  }