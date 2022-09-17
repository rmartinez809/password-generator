import React, {useEffect, useState, useRef} from 'react';
import './App.css';
import { generatePassword } from './data';

function App(): JSX.Element {

  const [passLen, setPassLen] = useState(8);
  const [password, setPassword] = useState('');

  //state for password options
  const [inclUppercase, setUpperCase] = useState(true);
  const [inclLowercase, setLowerCase] = useState(true);
  const [inclNumbers, setNumbers] = useState(true);
  const [inclSymbols, setSymbols] = useState(false);

  //when page loads, initially generate a random password
  /**As of React 18, components will need to be able to mount and remount
   * which runs useEffect twice. Utilizing useRef to make sure this logic
   * only runs once
   */
  const createFirstPass = useRef(true);
  useEffect(() => {
    if(createFirstPass.current) {
      createFirstPass.current = false;
      setPassword(generatePassword(passLen));
    }
  }, [])


  return (
    <div className="card">
      <input className="password" type="text" placeholder='P4$5W0rD!' value={password || ''}
      onChange = {(event) => {
        setPassword(String(event.target.value));
      }}
      ></input>

      <p>Character Length {passLen}</p>
      <input id="slider" className="slider" type="range" min="0" max="99" value={passLen}
      onChange = {(event) => {
        const value = Number(event.target.value);
        setPassLen(value);
        setPassword(generatePassword(value));
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