import React, { Component } from 'react';
import ProjectCard from './ProjectCard.js'
import Gaia from './images/gaia.png';
import NW from './images/northwestern.png';
import UPenn from './images/upenn.jpg';
import Clara from './images/clara.png';

class MyWork extends Component {
    render() {
        return (
            <div className="all-project-cards">
                <div className="row">
                    <div className="col">
                        <ProjectCard company="University of Pennsylvania" position="Undergraduate Research Assistant" location="Philadelphia, PA" years="August 2019-Present" 
                        description="Designing and testing a brand-new protocol for Bisulfite-sequencing using Perl and R,Took existing data sets of RNAseq to mine data for candidate genes" image={UPenn}/>
                    </div>
                    <div className="col">
                        <ProjectCard company="Gaia Wearables" position="Software Engineering Intern" location="Chicago, IL" years="May 2020-August 2020" 
                        description="Utilizing Arduino to create a software protocol that counts workout repetitions between Bluetooth devices
                        ,Analyzing PPG heart rate data sets utilizing Python and R using a multivariate regression machine learning model
                        ,Verifying and validating work with both firmware and software engineers" image={Gaia}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ProjectCard company="Clara" position="Growth Hacker" location="Remote" years="May 2020-August 2020" 
                        description="Created 5 new pricing options for startup accelerators to choose from with price comparisons for legal consultation
                        ,Generated growth and revenue estimations for Q2 and Q3 in 2020 during the COVID-19 pandemic using Excel" image={Clara}/>
                    </div>
                    <div className="col">
                        <ProjectCard company="Northwestern University" position="Student Inquiry Researcher" location="Chicago, IL" years="June 2017-July 2019" 
                        description="Analyzed genome-wide datasets to identify and present candidate genes using R
                        ,Wrote and ran data generated from population cohors and clinical trials through pipelines and statistical analysis to identify various genes that could affect various aging-related diseases" image={NW}/>

                    </div>
                </div>
                
            </div>
        );
    }
}

export default MyWork;