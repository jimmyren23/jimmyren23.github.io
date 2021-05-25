import React, { Component } from 'react';
import InstaImage from '../images/InstaBoard.png'
import Arrow from '../images/rightarrow.png';
class Insta extends Component {
    componentDidMount() {
        document.body.classList.add("insta");
        }
    
    componentWillUnmount() {
        document.body.classList.remove("insta");
    }
        
    render() {
        return (
            <div className="project-page">
                <div className="project-page-header">
                    <h1> InstaLite </h1>  
                </div>
                <div className="project-page-image">
                    <img src={InstaImage} alt="Example" />
                </div>
                <div className="project-page-all-sections"> 
                    <hr/>
                    <div className="project-page-overview">
                        <div className="project-section-header">
                            <h2> Overview </h2>
                        </div>
                        <div className="project-section-para">
                            <p> I created a web application using Django that can securely create accounts, make and delete posts with images and text, and comment and like others’ posts. This stores user and Instagram post information using SQL. </p>
                        </div>
                    </div>
                    <hr/>
                    <div className="project-page-role">
                        <div className="project-section-header">
                            <h2> My Role </h2>
                        </div>
                        <div className="project-section-para">
                            <p> As this was a personal project, I had created all the screens and built all the functionalities.</p>
                            <p> I had implemented the basic features such as adding posts with pictures and captions, letting user's create an account with password resets, viewing your own or all posts, adding likes and comments, and deleting posts. </p>
                        </div>
                    </div>
                    <hr/>
                    <div className="project-page-motivation">
                        <div className="project-section-header">
                            <h2> Motivation </h2>
                        </div>
                        <div className="project-section-para">
                            <p> When I first started off in computer science, I had little to no experience in working with anything more complicated than a simple HTML page with basic CSS. </p>
                            <p> To learn more about web-development and general software engineering, I created my fake verison of instagram! I wanted to work with Django and that allowed me to work with MySQL and web programming.</p>
                        </div>
                    </div>  
                    <hr/>
                    <div className="project-page-tech">
                        <div className="project-section-header">
                            <h2> Technology</h2>
                        </div>
                        <div className="project-section-para">
                            <p> I had used Django, HTML, Javascript, and CSS to create this website.</p>
                        </div>
                    </div>  
                    <hr/>
                    <div className="project-page-links">
                            <div className="project-section-header">
                                <h2> Links </h2>
                            </div>
                            <div className="project-section-para">
                                <a href="https://github.com/jimmyren23/Instagram-Django"> Go to GitHub Repository <img src={Arrow} alt="arrow"/> </a>                                 
                            </div>
                        </div>  
                    <hr/>
                </div>
            </div>
        );
    }
}

export default Insta;