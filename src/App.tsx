import React from 'react';
import './App.css';

function App(): JSX.Element {
  return (
    <div className="card">
      <input className="password" type="text" placeholder='P4$5W0rD!'></input>

      <p>Character Length</p>
      <input id="slider" className="slider" type="range" min="0" max="99"></input>

      <label className="checkbox-label">Include Uppercase Letters</label>
      <input id="upper-case" type="checkbox" defaultChecked={true}></input>

      <label className="checkbox-label">Include Lowercase Letters</label>
      <input id="lower-case" type="checkbox" defaultChecked={true}></input>

      <label className="checkbox-label">Include Numbers</label>
      <input id="numbers" type="checkbox" defaultChecked={true}></input>

      <label className="checkbox-label">Include Symbols</label>
      <input id="symbols" type="checkbox" defaultChecked={false}></input>

      <button>new password</button>
    </div>
  );
}

export default App;