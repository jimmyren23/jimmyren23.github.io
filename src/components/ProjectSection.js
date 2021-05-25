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
                    <h2> {this.props.projectName}{this.props.optional} </h2>
                    <h1> {this.props.subtitle}</h1>
                    <p>  {this.props.description}</p>
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