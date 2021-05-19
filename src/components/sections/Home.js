import React, { Component } from 'react';
import ProfilePic from "../images/profile.jpg"

class Home extends Component {
    render() {
        return (
            <div id="home">
                <div id="profile-image-container">
                    <img src={ProfilePic} alt="Profle" id="profile-image"/>
                    <h1> Jimmy Ren is... </h1>
                </div> 
                <div id="profile-facts">
                    <p> I am currently a <b>sophomore</b> studying <b>Computer Science</b> in the School of Engineering and Applied Sciences at the <b>University of Pennsylvania</b>. Currently, I'm pursuing a minor in Data Science, Statistics, and Mathematics and </p>
                    <p> I am currently a <b>sophomore</b> studying <b>Computer Science</b> in the School of Engineering and Applied Sciences at the <b>University of Pennsylvania</b>. Currently, I'm pursuing a minor in Data Science, Statistics, and Mathematics and </p>
                    <p> I am currently a <b>sophomore</b> studying <b>Computer Science</b> in the School of Engineering and Applied Sciences at the <b>University of Pennsylvania</b>. Currently, I'm pursuing a minor in Data Science, Statistics, and Mathematics and </p>
                </div>
            </div>
        );
    }
}

export default Home;