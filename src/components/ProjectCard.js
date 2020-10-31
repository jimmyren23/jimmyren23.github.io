import React, { Component } from 'react';
import UPenn from './images/upenn.jpg'
class ProjectCard extends Component {
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
        var description = String(this.props.description)
        var result = description.split(",");
        let exists = true;
        if(this.props.company == "unknown") {
            exists = false;
        } 
        return (
            <div className="project-card">
                <div className="project-image">
                    <img src={this.props.image} alt="UPenn"/>
                </div>
                <div className="project-details">
                    <h2> {this.props.company}</h2>
                    <p> {this.props.position} </p>
                    <p> {this.props.location}</p>
                    <p> {this.props.years}</p>
                    {exists 
                    ?   <>
                            <ul>
                                {result.map((value, index) => {
                                    return <li key={index}>{value}</li> 
                                })}
                            </ul>
                        </>
                    :   <p> Adventure is out there!</p>
                    }
                </div>
            </div>
        );
    }
}

export default ProjectCard;