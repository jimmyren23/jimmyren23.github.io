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
                <div className="icon-background">
                    <a href={this.props.link}> <img src={this.props.image} alt="Icon" className="icon"/> </a>
                </div>
            </div>
        );
    }
}

export default SocialIcon;