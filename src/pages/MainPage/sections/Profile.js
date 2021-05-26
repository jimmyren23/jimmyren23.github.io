import React, { Component } from 'react';
import ProfilePic from "../../../images/profile.jpg"

class Profile extends Component {
    render() {
        return (
            <div id="profile">
                <div id="profile-image-container">
                    <img src={ProfilePic} alt="Profle" id="profile-image"/>
                    <h1> Hello! I'm Jimmy Ren</h1>
                </div> 
                <div id="profile-facts">
                    <div className="profile-para">
                        <p> I am currently a <b>junior</b> studying <b>Computer Science</b> in the School of Engineering and Applied Sciences at the <b>University of Pennsylvania</b>. Currently, I'm pursuing a minor in Data Science, Statistics, and Mathematics.</p>
                    </div>
                    <div className="profile-para">
                        <p> In my free time, I've been <b> running </b> distances between 5ks to 10 miles. I love watching <b>soccer</b> (football) in my freetime, supporting Liverpool and FC Barcelona since I started watching in 2013. I also go <b> fishing </b> with friends at my local ponds! </p>
                    </div>
                    <div className="profile-para">
                        <p> I'm passionate about helping teams grow as a <b> product manager</b>, ensuring that technologies combine well with product designs. I'm learning <b>full-stack development </b >with an interest in <b> Machine Learning</b>. </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;