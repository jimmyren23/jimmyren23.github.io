import React, { Component } from 'react';

class SocialIcon extends Component {
        constructor(props) {
        super(props);
        this.link = "www.google.com"
        this.image = null;
    }
    render() {
        return (
            <div className="social-icon">
                    <a href={this.props.link}> <img src={this.props.image} alt="Icon" className="icon"/> </a>
            </div>
        );
    }
}

export default SocialIcon;