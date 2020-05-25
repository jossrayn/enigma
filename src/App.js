import React from 'react';

import Line from './line';
import Rotors from './Components/rotors/rotors';
import Lamboard from './Components/lampboard/lampboard';
import Keyboard from './Components/keyboard/keyboard';


import './App.css';


function App() {


  return (
    <div className="App">
      <Line/>
      <Rotors/>
      <Lamboard/>
      <Keyboard/>
    </div>
  );
}

export default App;
