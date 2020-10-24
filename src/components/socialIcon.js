import React, { Component } from 'react';

class SocialIcon extends Component {
        constructor(props) {
        super(props);
        this.link = "www.google.com"
        this.image = null;
    }
    render() {

        return (
            <div className="socialIcon" style={{display: "inline-block", marginLeft: "80px", marginRight: "80px"}}>
                <a href={this.props.link}> <img src={this.props.image} alt="Icon"/> </a>
            </div>
        );
    }
}

export default SocialIcon;