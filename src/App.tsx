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

  /**How to handle option changes
   * If an option is set to true, add it to an array
   * When calling the generatePassword() function, pass in this array as an argument
   * Generate a random number for the length of the options array
   */
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
        setPassword(generatePassword(value, passwordOptions.current));
        console.log(`Password options in React ${passwordOptions.current}`);
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

      <p>[password strength]</p>

      <button>new password</button>
    </div>
  );
}

export default App;