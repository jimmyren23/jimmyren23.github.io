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
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        {exists 
                        ?   <>
                            <div style={{height: "120px", padding: "10px"}}>
                                <img src={this.props.image} alt="Place" className="company"/>
                            </div>
                            <h2 className="title"> {this.props.company} </h2>
                            <p> Position: {this.props.position} </p>
                            <p> Location: {this.props.location} </p>
                            <p> Years Worked: {this.props.years} </p>
                            </>
                        :   <p> Adventure is out there!</p>
                        }
                    </div>
                    <div class="flip-card-back">
                        {exists 
                        ?   <>
                                <ul>
                                    {result.map((value, index) => {
                                        return <div> <li key={index}>{value}</li> <br/> </div>
                                    })}
                                </ul>
                            </>
                        :   <p> Adventure is out there!</p>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default InfoCard;