import React, {useEffect, useState, useRef} from 'react';
import './App.css';
import { generatePassword } from './data';
import PassStrength from './PassStrength';
import refresh from './refresh-svgrepo-com.svg';

function App(): JSX.Element {

  const [passLen, setPassLen] = useState(12);
  const [password, setPassword] = useState('');

  //state for password options
  const [inclUppercase, setUpperCase] = useState(true);
  const [inclLowercase, setLowerCase] = useState(true);
  const [inclNumbers, setNumbers] = useState(true);
  const [inclSymbols, setSymbols] = useState(false);

  const passwordOptions = useRef(["upper-case", "lower-case", "numbers"]);

  //when page loads, initially generate a random password
useEffect(() => {
  setPassword(generatePassword(passLen, passwordOptions.current))
}, [])

  /**
   * Helper function
   * Checks if password option is currently in the options array
   * If it is remove it, otherwise add the option
   *
   * When calling the generatePassword() function, pass in this array as an argument
   * Generate a random number for the length of the options array
   */
  const handlePasswordOptions = (option:string) => {
    if (passwordOptions.current.includes(option)) {
      passwordOptions.current = passwordOptions.current.filter( (value) => {
        return value !== option;
      })
    }
    else
      passwordOptions.current.push(option);
  }


  return (
    <div className="card border-radius">

      <input className="password" type="text" placeholder='P4$5W0rD!' value={password || ''} readOnly title="Copy to clipboard"
      onChange = {(event) => {
        setPassword(String(event.target.value));
      }}

      onClick = {(event) => {
        navigator.clipboard.writeText(password);
        const popUp = document.getElementById("tooltip");
        popUp.style.display="inline";

        setTimeout( () => {
          popUp.style.display = "none";
        }, 1500);
      }}
      >
      </input>
      <div className='tooltip-container'>
        <span id="tooltip">✔ Copied!</span>
      </div>

      <PassStrength password={password}/>

      <p className='password-length'>Password Length {passLen}</p>
      <input id="slider" className="slider" type="range" min="0" max="99" value={passLen}
      onChange = {(event) => {
        const value = Number(event.target.value);
        setPassLen(value);
        setPassword(generatePassword(value, passwordOptions.current));
      }
      }></input>

      <label className="checkbox-label" htmlFor='upper-case'>Include Uppercase Letters</label>
      <input id="upper-case" type="checkbox" defaultChecked={true}
      onChange = {(event) => {
        setUpperCase(event.target.checked);
        handlePasswordOptions("upper-case");
        setPassword(generatePassword(passLen, passwordOptions.current));
      }}
      ></input>

      <label className="checkbox-label" htmlFor='lower-case'>Include Lowercase Letters</label>
      <input id="lower-case" type="checkbox" defaultChecked={true}
      onChange = {(event) => {
        setLowerCase(event.target.checked);
        handlePasswordOptions("lower-case");
        setPassword(generatePassword(passLen, passwordOptions.current));
      }}
      ></input>

      <label className="checkbox-label" htmlFor='numbers'>Include Numbers</label>
      <input id="numbers" type="checkbox" defaultChecked={true}
      onChange = {(event) => {
        setNumbers(event.target.checked);
        handlePasswordOptions("numbers");
        setPassword(generatePassword(passLen, passwordOptions.current));
      }}
      ></input>

      <label className="checkbox-label" htmlFor='symbols'>Include Symbols</label>
      <input id="symbols" type="checkbox" defaultChecked={false}
      onChange = {(event) => {
        setSymbols(event.target.checked);
        handlePasswordOptions("symbols");
        setPassword(generatePassword(passLen, passwordOptions.current));
      }}
      ></input>

      <div className='btn-container'
        onClick={() => {
          setPassword(generatePassword(passLen, passwordOptions.current));
        }}
      >
        <img src={refresh} className="refresh-icon"></img>
      </div>

    </div>
  );
}

export default App;