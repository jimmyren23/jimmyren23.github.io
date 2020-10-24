import React, { Component } from 'react';
import ProfilePic from "./images/profile.jpg"

class Home extends Component {
    render() {
        return (
            <div className="home">
                <h1 style={{textDecoration: "underline"}}> My name is Jimmy Ren </h1>
                <img src={ProfilePic} alt="Profle" className="profile"/>
                <br/>
                <p> I am currently a <b>sophomore </b> studying <b>Computer Science</b> in the School of Engineering and Applied Sciences at the <b>University of Pennsylvania </b>. Currently, I'm pursuing a minor in Data Science and
                    and obtaining a concentration in Artificial Intelligence. I'm originally from Naperville, Illinois, fourty minutes outside of Chicago! 
                </p>
                <p>
                    I'm currently learning full-stack development with an interest in both data science and artificial intelligence.
                    In my freetime, I enjoy running, watching soccer (FC Barcelona and Liverpool), and fishing! Below, you can find some of my work
                    and some more details about me!
                </p>
            </div>
        );
    }
}

export default Home;