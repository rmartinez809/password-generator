import React from "react";

function PassStrength({password}): JSX.Element {
    const passLen = password.length;

    if (passLen >= 2 && passLen <= 5) {
        console.log("password strength is weak");
    }
    else if (passLen >= 6 && passLen <= 8) {
        console.log("password strength is fair");
    }
    else if (passLen >= 9 && passLen <= 11) {
        console.log("password strength is good");
    }
    else if (passLen >= 12) {
        console.log("password strength is excellent");
    }
    else {
        console.log("password strength is none");
    }

    return (
        <div className='progress-bar-container'>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>
    )
}

export default PassStrength;