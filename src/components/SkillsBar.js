import React, { Component } from 'react';

class SkillBar extends Component {
        constructor(props) {
        super(props);
        this.company = "Company"
        this.position = "Position"
        this.location = "Hello"
        this.years = "Years"
        this.description = "Worked on Bio. Worked on Physics"
        this.image = null;
    }
    render() {
        return (
            <div id="exp-detail-container" style={{backgroundColor: this.props.color}}>
                <div id="education-container">
                    <div id="school-container-text">
                        <div className="school-container-header"> 
                            <p> <b> Education </b> </p>
                            <p> University of Pennsylvania </p >
                        </div>
                        <div className="subtitle">
                            <p> August 2019 - May 2023</p>     
                        </div>         
                        <div className="details">
                            <p> Major in Computer Science with a concentration in Artificial Intelligence.</p>
                            <p> Minors in Data Science, Statistics, and Mathematics.</p>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="skill-container-header"> 
                    <p> <b> Skills </b> </p>
                </div>
                <div id="skill-container-text">
                    <div className="skill">
                        <p> Proficient</p>     
                    </div>         
                    <div className="details">
                        <p> Java </p>
                        <p> Python </p>
                        <p> R </p>
                        <p> LaTeX</p>
                        <p> HTML </p>
                        <p> CSS </p>
                        <p> React Native</p>
                        <p> React.js </p>
                        <p> SQL </p>
                        <p> Swift</p>
                    </div>
                </div>
                <div id="skill-container-text">
                    <div className="skill">
                        <p> Intermediate </p>     
                    </div>         
                    <div className="details">
                        <p> JavaScript </p>
                        <p> React.js </p>
                        <p> OCaml </p>
                        <p> MongoDB</p>
                        <p> C </p>
                    </div>
                </div>
                <div id="skill-container-text">
                    <div className="skill">
                        <p> Novice</p>     
                    </div>         
                    <div className="details">
                        <p> C++ </p>
                        <p> Django </p>
                        <p> AWS </p>
                        <p> Neo4J</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default SkillBar;