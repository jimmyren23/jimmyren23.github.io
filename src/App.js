import React from 'react';
import Welcome from './components/sections/Welcome.js'
import './App.css';
import Home from './components/sections/Home.js'
import MyWork from './components/sections/MyWork.js'
import Projects from './components/Projects.js'
/*
import Menu from './menu.svg';
import X from './x2.png';
import SideNav from './components/SideNav.js' 
import Contact from './components/sections/Contact.js'
import Education from './components/sections/Education.js'
import ProjectCard from './components/ProjectCard.js'
import Projects from './components/Projects.js'
*/





function App() {
  return (
    <div id="main-wrapper"> 
      <Welcome />
      <Home />
      <MyWork />
    </div>

  );
}

export default App;
