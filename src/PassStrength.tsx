import React, { useEffect } from "react";

function PassStrength({password}): JSX.Element {
    const passLen = password.length;
    let strength: string;

    if (passLen >= 2 && passLen <= 6) {
        strength = "weak";
    }
    else if (passLen >= 7 && passLen <= 9) {
        strength = "fair";
    }
    else if (passLen >= 10 && passLen <= 12) {
        strength = "good";
    }
    else if (passLen >= 13) {
        strength = "excellent";
    }
    else {
    }

    return (
        <div className='progress-bar-container' id="progress-bar-container">
        <div className={`bar ${strength === "weak" ? "red" : ""}
            ${strength === "fair" ? "yellow" : ""}
            ${strength === "good" ? "green" : ""}
            ${strength === "excellent" ? "green" : ""}
            `}></div>
        <div className={`bar ${strength === "fair" ? "yellow" : ""}
            ${strength === "good" ? "green" : ""}
            ${strength === "excellent" ? "green" : ""}
        `}></div>
        <div className={`bar ${strength === "good" ? "green" : ""}
            ${strength === "excellent" ? "green" : ""}`}></div>
        <div className={`bar ${strength === "excellent" ? "green" : ""}`}></div>
      </div>
    )
}

export default PassStrength;