import React, { Component } from 'react';

class InfoCard extends Component {
    render() {
        var description = String(this.props.description)
        var result = description.split(".");
        const sentences = result.map(x => 
            <> 
                <p> {x + "."} </p> 
                <br /> 
            </>);

        return (
            <div className="info-card-container" style={{backgroundColor: this.props.color}}>
                <div className="info-card-text">
                    <div className="info-card-header"> 
                        <p> <b>{this.props.company}</b> </p>
                        <p> {this.props.position} </p>
                    </div>
                    <div className="subtitle">
                        <p> {this.props.years} </p>     
                    </div>         
                    <div className="details">
                        {sentences}
                    </div>
                </div>
            </div>
        );
    }
}

export default InfoCard;