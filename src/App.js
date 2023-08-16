import './App.css';
import React from 'react';
import aboutme from './components/aboutme';
import home from './components/home';
import navbar from './components/navbar';
import projects from './components/projects';
import contact from './components/contact';

  
  export default function App() {
    return (
      <main>
        <navbar />
        <home />
        <aboutme />
        <projects />
        <contact />
      </main>
    );
  }