import React, { Component } from 'react';



class Header extends Component {
    render() {
        return (
            <div className="navLinks">
                <a href="#home" className="navlink">Home</a>
                <a href="#portfolio" className="navlink">Portfolio</a>
                <a href="#education" className="navlink">Education</a>
                <a href="#contact" className="navlink">Contact</a>
            </div>

        );
    }
}

export default Header;