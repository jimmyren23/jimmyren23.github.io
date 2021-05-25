import React, { Component } from 'react';
import Example from '../images/example.png'
class CSA extends Component {
    componentDidMount() {
        document.body.classList.add("csa");
        }
    
    componentWillUnmount() {
        document.body.classList.remove("csa");
    }
        
    render() {
        return (
            <div className="project-page">
                <div className="project-page-header">
                    <h1> Poga </h1>  
                </div>
                <div className="project-page-image">
                    <img src={Example} alt="Example" />
                </div>
                <div className="project-page-all-sections"> 
                    <hr/>
                    <div className="project-page-overview">
                        <div className="project-section-header">
                            <h2> Overview </h2>
                        </div>
                        <div className="project-section-para">
                            <p> Hello this is some nonsense woot woot. Hello this is some nonsense woot woot. Hello this is some nonsense woot woot. Hello this is some nonsense woot woot.</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="project-page-role">
                        <div className="project-section-header">
                            <h2> My Role </h2>
                        </div>
                        <div className="project-section-para">
                            <p> As this was my final project for my iOS course, CIS-195, I created the entire app from scratch. From start to finish, I implemented each of the screens after deciding on my MVC (model-view-controller). </p>
                            <p> Building upon other mini-apps that we had been doing during the semester individually, this app gave me the chance to use everything I learned, including APIs, package management, screen navigation, and the app lifecycle.</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="project-page-motivation">
                        <div className="project-section-header">
                            <h2> Motivation </h2>
                        </div>
                        <div className="project-section-para">
                            <p> Hello this is some nonsense woot woot.</p>
                        </div>
                    </div>  
                    <hr/>
                    <div className="project-page-tech">
                        <div className="project-section-header">
                            <h2> Technology</h2>
                        </div>
                        <div className="project-section-para">
                            <p> Hello this is some nonsense woot woot.</p>
                        </div>
                    </div>  
                    <hr/>
                </div>
            </div>
        );
    }
}

export default CSA;