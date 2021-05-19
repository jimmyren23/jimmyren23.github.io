import React, { Component } from 'react';
import Arrow from "../images/upwardarrow.png";
import Icon from "../socialIcon";
import Git from "../images/githubfilled.svg";
import Insta from "../images/instagramfilled.svg";
import Facebook from "../images/facebookfilled.svg";
import Email from "../images/emailfilled.svg";
import LinkedIn from "../images/linkedinfilled.svg";
class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <h2> Contact </h2>
                <p> Feel free to shoot me a message! </p>
                <div id="icons" style={{alignItems:"center", display: "inline-block", alignSelf: "center", textAlign: "center", width: "100%"}}>
                    <Icon image={Git} link="https://github.com/jimmyren23" />
                    <Icon image={Insta} link="https://instagram.com/jimmy.ren/" />
                    <Icon image={Facebook} link="https://www.facebook.com/jimmyren23/" />
                    <Icon image={Email} link="mailto:jimmyren@seas.upenn.edu" />
                    <Icon image={LinkedIn} link="https://www.linkedin.com/in/jim-ren" />
                </div>
                <div className="enterButton">
                    <button id="enter" > <a href="#home"><img src={Arrow} alt="Scroll Down" id="arrow"/> </a></button>
                </div>
            </div>
        );
    }
}

export default Contact;