import './App.css';
import React from 'react';
import Aboutme from './components/AboutMe';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';

  
  export default function App() {
    return (
      <main>
        <Navbar />
        <Home />
        <Aboutme />
        <Projects />
        <Contact />
      </main>
    );
  }