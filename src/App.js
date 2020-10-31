import React, { useState, useRef, useEffect }from 'react';
import Menu from './menu.svg';
import X from './x2.png';
import './App.css';
import SideNav from './components/SideNav.js' 
import Home from './components/Home.js'
import Contact from './components/Contact.js'
import MyWork from './components/MyWork.js'
import Education from './components/Education.js'
import Welcome from './components/Welcome.js'
import ProjectCard from './components/ProjectCard.js'
import Projects from './components/Projects.js'

function FadeInSection(props) {
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}




function App() {
  const [toggle, setToggle] = useState(true);
  function navToggle() {
    setToggle(!toggle);
    if(toggle) {
      document.getElementById("mySideBar").style.width = "280px";
      document.getElementById("all-sections").style.opacity = "0.5";
    } else {
      document.getElementById("mySideBar").style.width = "0px";
      document.getElementById("all-sections").style.opacity = "1";
    }
  }
  return (
    <div className="container">
      <div id="navigation">
        <div className="sidebar" id="mySideBar">
          <div id="close">
            <button onClick={navToggle} id="x"> <img src={X} alt="menu"/> </button>
            <SideNav/>
          </div>
        </div>
        <div id="header">
            <button onClick={navToggle}><img src={Menu} alt="menu"/> </button>
        </div>
      </div>
    
      <div id="all-sections">
        <div className="section1" id="welcome">
          <FadeInSection>
            <Welcome />
          </FadeInSection>
        </div>
        <div className="title" id="home-anchor">
            <h2> My Name is Jimmy Ren</h2>
        </div>
        <div className="section2" id="home">
          <FadeInSection>
            <Home />
          </FadeInSection>
        </div>
        <div className="title" id="portfolio-anchor">
            <h2> Work Experience </h2>
        </div>      
        <div className="section1" id="all-projects">
          <FadeInSection>
            <Projects />
          </FadeInSection>
        </div>
        <div className="title" id="education-anchor">
            <h2> Education </h2>
        </div>   
        <div className="section2" id="education">
          <FadeInSection>
            <Education />
          </FadeInSection>
        </div>

        <div className="section1" id="contact-anchor">
          <FadeInSection>
            <Contact />
          </FadeInSection>
        </div>
      </div>
    </div>
  );
}

export default App;
