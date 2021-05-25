
import React, {Component} from 'react';
import { Link } from "react-scroll";

class Navbar extends Component {
     
    render() {
        return (
            <div id="navbar">
                <div id="nav-items">
                    <NavItem text="About" destination="profile" />
                    <NavItem text="Experience" destination="portfolio" />
                    <NavItem text="Projects" destination="all-project-cards" />
                </div>
            </div>
        );
    }
}

class NavItem extends Component {
    render() {
        return(
            <Link className="navbtn"
                activeClass="active"
                to={this.props.destination}
                spy={true}
                smooth={true}
                duration={500}>
                {this.props.text}
            </Link>
        );
    }
}
export default Navbar;
