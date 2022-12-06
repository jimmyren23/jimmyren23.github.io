import React, {Component} from 'react';
import Welcome from './sections/Welcome.js'
import '../../App.css';

import Profile from './sections/Profile.js'
import MyWork from './sections/MyWork.js'
import Projects from './sections/Projects.js'
import Contact from './sections/Contact.js'
import Navbar from '../../components/Navbar.js'
import PathCal from '../../sections/PathCal/PathCal.js'

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
            <div id="policy-page">
                <h1> Path Cal</h1>
                <p>
This is a chrome extension that allows University of Pennsylvania students download their class schedules in an ICS format or upload it to their google calendar!

For our privacy policy, I hereby state that none of this data is stored by the app or by me, and rather only utilizes the web data, scrapes it, and either gives you a downloadable file or uploads it to your Google Calendar using their secure API. We do not collect or share your data.

This app only need your Google authorization in order to upload new events!
</p>
            </div>
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