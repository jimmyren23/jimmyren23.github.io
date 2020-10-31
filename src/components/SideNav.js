import React, { Component } from 'react';



class Header extends Component {
    render() {
        return (
            <div className="navLinks">
                <a href="#home-anchor" className="navlink">Home</a>
                <a href="#portfolio-anchor" className="navlink">Portfolio</a>
                <a href="#education-anchor" className="navlink">Education</a>
                <a href="#contact-anchor" className="navlink">Contact</a>
            </div>

        );
    }
}

export default Header;