import React, {useEffect, useState} from 'react';
import './App.css';
import { characters } from './data';

function App(): JSX.Element {

  characters()

  const [passLen, setPassLen] = useState(8);

  //state for password options
  const [inclUppercase, setUpperCase] = useState(true);
  const [inclLowercase, setLowerCase] = useState(true);
  const [inclNumbers, setNumbers] = useState(true);
  const [inclSymbols, setSymbols] = useState(false);



  return (
    <div className="card">
      <input className="password" type="text" placeholder='P4$5W0rD!'></input>

      <p>Character Length {passLen}</p>
      <input id="slider" className="slider" type="range" min="0" max="99" value={passLen}
      onChange = {(event) => {
        setPassLen(Number(event.target.value));
      }
      }></input>

      <label className="checkbox-label">Include Uppercase Letters</label>
      <input id="upper-case" type="checkbox" defaultChecked={true}
      onChange = {(event) => {
        setUpperCase(event.target.checked);
      }}
      ></input>

      <label className="checkbox-label">Include Lowercase Letters</label>
      <input id="lower-case" type="checkbox" defaultChecked={true}
      onChange = {(event) => {
        setLowerCase(event.target.checked);
      }}
      ></input>

      <label className="checkbox-label">Include Numbers</label>
      <input id="numbers" type="checkbox" defaultChecked={true}
      onChange = {(event) => {
        setNumbers(event.target.checked);
      }}
      ></input>

      <label className="checkbox-label">Include Symbols</label>
      <input id="symbols" type="checkbox" defaultChecked={false}
      onChange = {(event) => {
        setSymbols(event.target.checked);
      }}
      ></input>

      <p>[password strength]</p>

      <button>new password</button>
    </div>
  );
}

export default App;