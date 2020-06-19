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
      }} />
    </div> 
  );
}

export default App;
