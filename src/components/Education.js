import React, { Component, useState } from 'react';
import PennEng from './images/PennEngineering.png'
import IMSA from './images/IMSA.png'



class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: false};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }
    handleToggleClick() {
        if(this.state.showWarning) {
            document.getElementById('relevant-courses').style.height = "0px";
            document.getElementById('relevant-courses').style.border = "0px solid black";
            document.getElementById('relevant-courses').style.padding = "0px";
            document.getElementById('relevant-courses').style.borderRadius = "0px";
        } else {
            document.getElementById('relevant-courses').style.height = "400px";
            document.getElementById('relevant-courses').style.border = "1px solid black";
            document.getElementById('relevant-courses').style.borderRadius = "10px";
            document.getElementById('relevant-courses').style.padding = "50px";

        }
        this.setState(state => ({
          showWarning: !state.showWarning
        }));

    }
    render() {
        var description = "Data Structures and Algorithms;Discrete Math;Engineering Probability;Programming;Computer Architecture;Automata, Computability and Complexity;IOS Development";
        var result = description.split(";");
        return (
            <div className="education">
                <div className="School">
                    <div className="school-image">
                        <img src={PennEng} alt="Penn Engineering"></img>
                    </div>
                    <div className="school-details">
                        <h2> <b> University of Pennsylvania </b> </h2>
                        <p> School of Engineering & Applied Science	</p>
                        <p> Philadelphia, PA</p>
                        <p> August 2019 - May 2023</p>
                        <p>Bachelor of Science in Engineering, Computer Science </p>
                        <button id="courseToggle" onClick={this.handleToggleClick}> Relevant Courses </button>
                    </div>
                </div>
                {true
                ?   
                    <div id="relevant-courses">
                        <h2> Relevant Courses: </h2> 
                        <ul>
                            {result.map((value, index) => {
                                return <li key={index}>{value}</li> 
                            })}
                        </ul>
                    </div>
                :   <>
                    </>
                }
                <div className="School">
                    <div className="school-image">
                        <img src={IMSA} alt="Penn Engineering"></img>
                    </div>
                    <div className="school-details">
                        <h2> <b> Illinois Mathematics and Science Academy </b> </h2>
                        <p> Aurora, IL	</p>
                        <p> August 2016 - May 2019 </p>
                        <p> GPA: 3.92/4.00 (unweighted) </p>
                         <p> ACT: 36 (Math 36, English 36, Reading 36, Science 35) </p>
                    </div>
                </div>
            </div>
        );
    }
}



export default Education;