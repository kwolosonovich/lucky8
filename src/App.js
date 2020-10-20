import React from 'react';
import './App.css';
import Answers from './Answers'
import EightBall from './EightBall'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lucky Eight</h1>
      </header>
      <EightBall answers={Answers} />
    </div>
  );
}

export default App;
