import React from 'react';
import './Landing.css';
import Flash from "./../../Assets/flash.png";


const Landing=()=>{
    return(
        <div className="landing-container">
        <div className="landing-left">
            <h1 className="landing-header">can you type...</h1>
            <div className="typewriter-container">
                <p>Fast?</p>
                <p>Correct?</p>
                <p>Quick</p>
            </div>
        </div>
        <div className="landing-right">
        <img className="flash-image" src={Flash} alt="hero"/>

        </div>

        </div>
    );
}
export default Landing;