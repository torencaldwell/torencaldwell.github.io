import React from 'react';
import './App.css';
import { Parallax, Background } from 'react-parallax';

const App = () => {
  return (
    <div className="App">
      <Parallax strength={300} style={{ width: '100%' }} bgStyle={{ width: '100%' }}>
        <Background style={{width: '100%'}}>
          <div style={{
            width: '100%',
            height: '400px',
            backgroundColor:'#666666'
          }}>
            <img src={require('./assets/background.jpg')}/>
            <div style={{height: '200px'}}/>
            <h1 style={{textAlign: 'center'}}>This is a text..</h1>
          </div>
        </Background>

        <div style={{height: '500px'}}>
          <p>This is text</p>
        </div>
      </Parallax>
      <div style={{ height:'5000px' }} />
    </div>
  );
}

export default App;
