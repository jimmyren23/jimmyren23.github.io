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
      document.getElementById("sections").style.opacity = "0.5";
    } else {
      document.getElementById("mySideBar").style.width = "0px";
      document.getElementById("sections").style.opacity = "1";
    }
  }
  return (
    <div className="container">
      <div id="main">
        <div id="navigation">
          <div className="sidebar" id="mySideBar">
            <div id="close">
              {toggle ? <button onClick={navToggle} id="x"> <img src={X} alt="menu"/> </button> 
                      : <button onClick={navToggle} id="x"> <img src={X} alt="menu"/> </button>}
            </div>
            <SideNav/>
          </div>
          <div id="header">
            {toggle ? <button onClick={navToggle} id="nav"><img src={Menu} alt="menu"/> </button> 
                    : <button onClick={navToggle} id="nav"><img src={Menu} alt="menu"/> </button>
            }
          </div>
        </div>
        <div id="sections">
          <div className="section" id="welcome">
            <FadeInSection>
              <Welcome />
            </FadeInSection>
          </div>
          <div className="section" id="home">
            <FadeInSection>
              <Home />
            </FadeInSection>
          </div>
          <div className="section" id="portfolio">
            <FadeInSection>
              <MyWork />
            </FadeInSection>
          </div>
          <div className="section" id="education">
            <FadeInSection>
              <Education />
            </FadeInSection>
          </div>
          <div className="section" id="contact">
            <FadeInSection>
              <Contact />
            </FadeInSection>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
