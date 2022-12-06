import React, {Component} from 'react';
import Welcome from './sections/Welcome.js'
import '../../App.css';

import Profile from './sections/Profile.js'
import MyWork from './sections/MyWork.js'
import Projects from './sections/Projects.js'
import Contact from './sections/Contact.js'
import Navbar from '../../components/Navbar.js'
import PathCal from '../PathCal/PathCal.js'

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
                <PathCal />
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