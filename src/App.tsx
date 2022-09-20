import React, {useEffect, useState, useRef, Fragment} from 'react';
import './App.css';
import { generatePassword } from './data';
import PassStrength from './PassStrength';
import refresh from './refresh-svgrepo-com.svg';

function App(): JSX.Element {

  const [passLen, setPassLen] = useState(8);
  const [password, setPassword] = useState('');

  //state for password options
  const [inclUppercase, setUpperCase] = useState(true);
  const [inclLowercase, setLowerCase] = useState(true);
  const [inclNumbers, setNumbers] = useState(true);
  const [inclSymbols, setSymbols] = useState(false);

  const passwordOptions = useRef(["upper-case", "lower-case", "numbers"]);

  //when page loads, initially generate a random password
  /**As of React 18, components will need to be able to mount and remount
   * which runs useEffect twice. Utilizing useRef to make sure this logic
   * only runs once
   */
  const createFirstPass = useRef(true);
  useEffect(() => {
    if(createFirstPass.current) {
      createFirstPass.current = false;
      setPassword(generatePassword(passLen, passwordOptions.current));
    }
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
    <div className="card">

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

      <p>Password Length {passLen}</p>
      <input id="slider" className="slider" type="range" min="0" max="99" value={passLen}
      onChange = {(event) => {
        const value = Number(event.target.value);
        setPassLen(value);
        setPassword(generatePassword(value, passwordOptions.current));
      }
      }></input>

      <label className="checkbox-label">Include Uppercase Letters</label>
      <input id="upper-case" type="checkbox" defaultChecked={true}
      onChange = {(event) => {
        setUpperCase(event.target.checked);
        handlePasswordOptions("upper-case");
        setPassword(generatePassword(passLen, passwordOptions.current));
      }}
      ></input>

      <label className="checkbox-label">Include Lowercase Letters</label>
      <input id="lower-case" type="checkbox" defaultChecked={true}
      onChange = {(event) => {
        setLowerCase(event.target.checked);
        handlePasswordOptions("lower-case");
        setPassword(generatePassword(passLen, passwordOptions.current));
      }}
      ></input>

      <label className="checkbox-label">Include Numbers</label>
      <input id="numbers" type="checkbox" defaultChecked={true}
      onChange = {(event) => {
        setNumbers(event.target.checked);
        handlePasswordOptions("numbers");
        setPassword(generatePassword(passLen, passwordOptions.current));
      }}
      ></input>

      <label className="checkbox-label">Include Symbols</label>
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
        <img src={refresh} className="refresh-btn"></img>
      </div>

    </div>
  );
}

export default App;