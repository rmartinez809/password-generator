import React, { useEffect } from "react";

function PassStrength({password}): JSX.Element {
    const passLen = password.length;
    let strength: string;

    if (passLen >= 2 && passLen <= 5) {
        strength = "weak";
    }
    else if (passLen >= 6 && passLen <= 8) {
        strength = "fair";
    }
    else if (passLen >= 9 && passLen <= 11) {
        strength = "good";
    }
    else if (passLen >= 12) {
        strength = "excellent";
    }
    else {
    }

    return (
        <div className='progress-bar-container' id="progress-bar-container">
        <div className={`bar ${strength === "weak" ? "red" : ""}
            ${strength === "fair" ? "yellow" : ""}
            ${strength === "good" ? "green" : ""}
            ${strength === "excellent" ? "dark-green" : ""}
            `}></div>
        <div className={`bar ${strength === "fair" ? "yellow" : ""}
            ${strength === "good" ? "green" : ""}
            ${strength === "excellent" ? "dark-green" : ""}
        `}></div>
        <div className={`bar ${strength === "good" ? "green" : ""}
            ${strength === "excellent" ? "dark-green" : ""}`}></div>
        <div className={`bar ${strength === "excellent" ? "dark-green" : ""}`}></div>
      </div>
    )
}

export default PassStrength;