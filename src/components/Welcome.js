import React, { Component } from 'react';
import Arrow from "./images/downarrow.png"

class Welcome extends Component {
    render() {
        return (
            <div className="welcomeContainer">
                <div className="welcome">
                    <h1> Welcome </h1>
                </div>
                <div className="enterButton">
                    <button id="enter" > <a href="#home"><img src={Arrow} alt="Scroll Down" id="arrow"/> </a></button>
                </div>
            </div>
        );
    }
}

export default Welcome;