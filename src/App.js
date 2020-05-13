import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Random } from './components/Random';

function App() {
  return (
    <div className="App">
      <Random/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />       
          
      </header>
      
    </div>
  );
}

export default App;
