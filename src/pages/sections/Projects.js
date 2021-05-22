import React, { Component } from 'react';
import ProjectSection from '../../components/ProjectSection.js'

import Example from '../../images/example.png'
class MyWork extends Component {
    render() {
        return (
            <div id="all-project-cards">
                <div id="project-header">
                    <h1> Projects</h1>
                </div>
                <div id="project-sections">
                    <ProjectSection side="left" color="#A8DADC" fontColor="black" project="/poga" image={Example}/>
                    <ProjectSection side="right" color="#1D3557" fontColor="white" project="/poga" image={Example}/>
                    <ProjectSection side="left" color="#457B9D" fontColor="white" project="/poga" image={Example}/>    
                    <ProjectSection side="right" color="#F1FAEE" fontColor="black" project="/poga" image={Example}/>
                </div>
            </div>
        );
    }
}

export default MyWork;