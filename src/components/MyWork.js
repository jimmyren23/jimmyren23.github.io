import React, { Component } from 'react';
import InfoCard from './InfoCard.js'
import Gaia from './images/gaia.png';
import NW from './images/northwestern.png';
import UPenn from './images/upenn.png';
import Clara from './images/clara.png';
class MyWork extends Component {
     
    render() {
        return (
            <div className="portfolio">
                <h1> My Portfolio </h1>
                <div className="row">
                    <div className="col">
                        <InfoCard company="Gaia Wearables" position="Software Engineering Intern" location="Chicago, IL" years="May 2020-August 2020" 
                        description="Utilizing Arduino to create a software protocol that counts workout repetitions between Bluetooth devices
                        ,Analyzing PPG heart rate data sets utilizing Python and R using a multivariate regression machine learning model
                        ,Verifying and validating work with both firmware and software engineers" image={Gaia}/>
                    </div>
                    <div className="col">
                        <InfoCard company="University of Pennsylvania" position="Undergraduate Research Assistant" location="Philadelphia, PA" years="August 2019-Present" 
                        description="Designing and testing a brand-new protocol for Bisulfite-sequencing using Perl and R" image={UPenn}/>
                    </div>
                    <div className="col">
                        <InfoCard company="Clara" position="Growth Hacker" location="Remote" years="May 2020-August 2020" 
                        description="Created 5 new pricing options for startup accelerators to choose from with price comparisons
                        ,Generated growth and revenue estimations for the next quarter using Excel" image={Clara}/>
                    </div>
                </div>    
                <div className="row">
                    <div className="col">
                        <InfoCard company="Northwestern University" position="Student Inquiry Researcher" location="Chicago, IL" years="June 2017-July 2019" 
                        description="Analyzed genome-wide datasets using R Code
                        ,Created and ran through pipelines and statistical analysis" image={NW}/>
                    </div>
                    <div className="col">
                        <InfoCard company="unknown"/>
                    </div>
                    <div className="col">
                        <InfoCard company="unknown"/>
                    </div>
                </div>         
            </div>
        );
    }
}

export default MyWork;