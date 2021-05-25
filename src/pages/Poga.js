import React, { Component } from 'react';
import PogaImage from '../images/PogaBoard.png'
import Arrow from '../images/rightarrow.png';
class Poga extends Component {
    componentDidMount() {
        document.body.classList.add("poga");
        }
    
    componentWillUnmount() {
        document.body.classList.remove("poga");
    }
        
    render() {
        return (
            <div className="project-page">
                <div className="project-page-header">
                    <h1> Poga </h1>  
                </div>
                <div className="project-page-image">
                    <img src={PogaImage} alt="Poga Page" />
                </div>
                <div className="project-page-all-sections"> 
                    <hr/>
                    <div className="project-page-overview">
                        <div className="project-section-header">
                            <h2> Overview </h2>
                        </div>
                        <div className="project-section-para">
                            <p> Want to start off your day right? Start it off by spending time with your plant-friend doing a yoga or meditation session, which will log your time and movements to give you the power to grow your plant-friend and you alongside it! Our AI-powered website will be able to monitor your progression through yoga workouts while you accumulate points and share your progress with friends. </p>
                        </div>
                    </div>
                    <hr/>
                    <div className="project-page-role">
                        <div className="project-section-header">
                            <h2> My Role </h2>
                        </div>
                        <div className="project-section-para">
                            <p> This was my first product manager role, and it was an absolute pleasure to lead a technical team for the first time for Penn Spark (formally known as Penn Creative Labs). I held weekly meetings throughout the semester and had to ensure that the moving pieces of the project were coming together while navigating through everyone’s busy schedules. I also had to do weekly updates on the project to the rest of the club, while communicating our timeline and any issues we may have been having.</p>
                            <p> Working with developers that had a spectrum of web development experience, I made sure that everyone understood what they were working on and ensured that everyone on the team felt comfortable learning and challenging themselves to create new products and features. Leading a team made me further understand the entire process of organizing a successful project. </p>
                        </div>
                    </div>
                    <hr/>
                    <div className="project-page-motivation">
                        <div className="project-section-header">
                            <h2> Motivation </h2>
                        </div>
                        <div className="project-section-para">
                            <p> In the middle of COVID-19, my friends and I wanted to create an app that would allow people to be active indoors. Alongside that, we thought about different ways to keep people <b> motivated</b>. Poga combines those two ideas, having a plant friend grow with you as you grew with every yoga session. </p>
                        </div>
                    </div>  
                    <hr/>
                    <div className="project-page-tech">
                        <div className="project-section-header">
                            <h2> Technology</h2>
                        </div>
                        <div className="project-section-para">
                            <p> We used React.js to build our website, which we may ultimately host on github pages in the future. </p>
                            <p>To create the CNN model, we had used ml5.js, TensorFlow.js, and other pose estimation packages in order to integrate it directly into our React project.  </p>
                            <p> For animations and designs, the designers used Adobe Illustrator and Adobe AfterEffects which we integrated into our website using Lottie for React. </p>
                        </div>
                    </div>  
                    <hr/>
                    <div className="project-page-links">
                        <div className="project-section-header">
                            <h2> Links </h2>
                        </div>
                        <div className="project-section-para">
                            <a href="https://github.com/PennCreativeLabs/sp21-poga"> Go to GitHub Repository <img src={Arrow} alt="arrow"/> </a>                        
                        </div>
                    </div>  
                    <hr/>
                </div>
            </div>
        );
    }
}

export default Poga;