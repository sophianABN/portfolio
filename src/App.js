// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-container">
      <div className='header'>
        <Header />
      </div>
      <main id="content" className="content">
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
