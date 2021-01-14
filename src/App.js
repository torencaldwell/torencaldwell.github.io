import React from 'react';
import './App.css';
import { ParallaxHeader } from './components/ParallaxHeader';
import { Projects, Resume, Contact, About } from './sections';

const App = () => {
  return (
    <div className="App">
      <ParallaxHeader/>
      <div style={{
        padding: `250px 0 ${window.innerHeight}px 0`,
        position: 'relative',
        zIndex: 2
      }}>
        <About />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </div> 
  );
}

export default App;
