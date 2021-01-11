import React from 'react';
import './App.css';
import { ParallaxHeader } from './components/ParallaxHeader';
import { Projects, Resume, Contact, About } from './sections';
import { colors } from './theme/colors';

const App = () => {
  return (
    <div className="App">
      <ParallaxHeader/>
      <div style={{
        height:'5000px',
        backgroundColor: colors.midnightBlue,
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
