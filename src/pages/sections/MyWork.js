import React, { Component } from 'react';

import InfoCard from '../../components/InfoCard.js'
import SkillBar from '../../components/SkillsBar.js'

class MyWork extends Component {    
    render() {
        return (
            <div id="portfolio">
                <h1 id="work-header"> Work Experience</h1>
                <div id="all-info-cards">
                    <SkillBar color="#a8dadc" />
                    <InfoCard 
                        color="#e4e7eb" 
                        company="Gaia Wearables" 
                        position="Software Engineering Intern" 
                        location="Chicago, IL" 
                        years="May 2020-August 2020" 
                        description="Created a software protocol that counts workout repetitions between Bluetooth devices using Arduino.
                            Analyzed PPG heart rate datasets utilizing Python and R using a multivariate regression machine learning model.
                            Verified and validated work between the firmware and software engineers"/>
                    <InfoCard 
                        color="#e4e7eb" 
                        company="University of Pennsylvania" 
                        position="Research Assistant" 
                        location="Philadelphia, PA" 
                        years="August 2019-Present" 
                        description="Tested supervised machine learning algorithms using Python to measure both the fairness and accuracy of new models with Professor Michael Kearns and Professor Aaron Roth" />

                    <InfoCard 
                        color="#e4e7eb" 
                        company="Northwestern University" 
                        position="Student Researcher" 
                        location="Chicago, IL" 
                        years="June 2017-July 2019" 
                        description="Analyzed genome-wide datasets using R Code to identify candidates for genes that have an up-stream affect on prostate cancer.
                            Created and ran various datasets from a Veteran Study through pipelines to clean and reformat data" />
                    <InfoCard 
                        color="#e4e7eb" 
                        company="Clara" 
                        osition="Growth Hacker" 
                        location="Remote" 
                        years="May 2020-August 2020" 
                        description="Created 5 new pricing options for startup accelerators to choose from with price comparisons.
                            Generated growth and revenue estimations for the next quarter using Excel" />
                </div>
            </div>
        );
    }
}

export default MyWork;