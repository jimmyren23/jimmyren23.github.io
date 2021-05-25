import React, { Component } from 'react';
import Icon from "../../components/Icons.js";

import Git from "../../images/githubfilled.svg";
import Insta from "../../images/instagramfilled.svg";
import Facebook from "../../images/facebookfilled.svg";
import Email from "../../images/emailfilled.svg";
import LinkedIn from "../../images/linkedinfilled.svg";
import Love from '../../images/love.png'

class Contact extends Component {
    render() {
        return (
            <div id="contact-section">
                <div id="contact-text"> 
                    <h1> Say Hello! </h1>
                    <p> Feel free to shoot me a message using any of the platforms below! </p>
                </div>
                <div id="icons" style={{alignItems:"center", display: "inline-block", alignSelf: "center", textAlign: "center", width: "100%"}}>
                    <Icon image={Git} link="https://github.com/jimmyren23"/>
                    <Icon image={Insta} link="https://instagram.com/jimmy.ren/" />
                    <Icon image={Facebook} link="https://www.facebook.com/jimmyren23/" />
                    <Icon image={Email} link="mailto:jimmyren@seas.upenn.edu" />
                    <Icon image={LinkedIn} link="https://www.linkedin.com/in/jim-ren" />
                </div>
                <div id="copyright">
                    <p> © Jimmy Ren. All rights reserved. Made with </p> 
                    <img src={Love} alt="heart" />
                </div>
            </div>
        );
    }
}

export default Contact;