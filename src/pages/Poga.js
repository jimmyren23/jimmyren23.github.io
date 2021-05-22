import React, { Component } from 'react';
import Example from '../images/example.png'
class Poga extends Component {


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

export default Poga;