import React from 'react';
import './App.css';
import { ParallaxHeader } from './components/ParallaxHeader';
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
        <h1>Buncha Conent's gonna go here</h1>
        <p>A whole lot of it. promise. gonna be huge. big ol' deal. you'll see.</p>
      </div>
    </div> 
  );
}

export default App;
