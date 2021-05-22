import React, {Component} from 'react';
import Welcome from '../pages/sections/Welcome.js'
import '../App.css';
import Profile from './sections/Profile.js'
import MyWork from '../pages/sections/MyWork.js'
import Projects from '../pages/sections/Projects.js'
import Contact from '../pages/sections/Contact.js'
import Navbar from '../components/Navbar.js'

class MainPage extends Component {
    componentDidMount() {
    document.body.classList.add("main");
    }

    componentWillUnmount() {
    document.body.classList.remove("main");
    }
    
    render() {
        document.body.classList.add("main")
        return (
            <div id="main-wrapper"> 
                <Navbar />
                <Welcome />
                <Profile />
                <MyWork />
                <Projects />
                <Contact />
            </div>
        );
    }
}

export default MainPage;