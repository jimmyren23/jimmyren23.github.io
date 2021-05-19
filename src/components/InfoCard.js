import React, { Component } from 'react';

class InfoCard extends Component {
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
            <div className="info-card">
                <h1> {this.props.company} </h1>
                <p> Position: {this.props.position} </p>
                <p> Location: {this.props.location} </p>
                <p> Years Worked: {this.props.years} </p>                
            </div>
        );
    }
}

export default InfoCard;