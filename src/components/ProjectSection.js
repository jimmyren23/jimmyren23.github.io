import React, { Component } from 'react';
import Arrow from '../images/rightarrow.png';
import { Link } from "react-router-dom";
class ProjectSection extends Component {
        constructor(props) {
        super(props);
        this.projectName = "Company"
        this.position = "Position"
        this.location = "Hello"
        this.years = "Years"
        this.description = "Worked on Bio. Worked on Physics"
        this.image = null;
    }
    render() {
        return (
            <div className={"project-card-" + this.props.side} style={{backgroundColor: this.props.color, color: this.props.fontColor}}>
                <div className={"project-image-" + this.props.side}>
                    <img src={this.props.image} alt="project"/>
                </div>
                <div className={"project-details-" + this.props.side}>
                    <h1> Project Name </h1>
                    <h2> Subtitle</h2>
                    <p> Brief project Description. Here is some random nonsense about the project.</p>
                    <div className="project-link" style={{borderColor: this.props.fontColor}}> 
                        <Link to={this.props.project} className="learn-more">
                            <p> Learn More </p>
                            <div className={"arrow-" + this.props.fontColor}>
                                <img src={Arrow} alt="arrow"/>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectSection;