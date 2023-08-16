import './App.css';
import React from 'react';
import Aboutme from './components/AboutMe';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Images from './images';


  export default function App() {
    return (
      <main className="bg-background bg-cover h-screen">
        <Navbar />
        <Home />
        <Aboutme />
        <Projects />
        <Images />
        <Contact />
      </main>
    );
  }