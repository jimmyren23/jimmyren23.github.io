import React, { Component } from 'react';
import ProfilePic from "./images/profile.jpg"

class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="profile">
                    <div className="profile-image-container">
                        <img src={ProfilePic} alt="Profle" className="profile-image"/>
                    </div> 
                    <div className="profile-facts">
                        <p> I am currently a <b>sophomore</b> studying <b>Computer Science</b> in the School of Engineering and Applied Sciences at the <b>University of Pennsylvania</b>. Currently, I'm pursuing a minor in Data Science and
                            I'm planning on obtaining a concentration in Artificial Intelligence. I'm originally from Naperville, Illinois, forty minutes outside of Chicago! 
                        </p>
                        <p>
                            I'm learning <b>full-stack development</b> with an interest in both <b>data science</b> and <b>artificial intelligence</b>.
                            In my freetime, I enjoy running, watching soccer (FC Barcelona and Liverpool), and fishing! Below, you can find some of my work
                            and some more details about me!
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;