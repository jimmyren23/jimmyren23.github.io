import React, { Component } from 'react';
import ProjectSection from '../../../components/ProjectSection.js'

import Poga from '../../../images/PogaBoard.png'
import Spotify from '../../../images/SpotifyBoard.png'
import Tweet from '../../../images/TweetBoard.png'
import Insta from '../../../images/InstaBoard.png'
import Recipe from '../../../images/RecipeBoard.png'

class MyWork extends Component {
    render() {
        return (
            <div id="all-project-cards">
                <div id="project-header">
                    <h1> Projects</h1>
                </div>
                <div id="project-sections">
                    <ProjectSection 
                        side="left" 
                        color="#b69df2" 
                        fontColor="black" 
                        project="/poga" 
                        image={Poga}
                        projectName="Poga"
                        subtitle="AI-powered Yoga Practice"
                        description="Work on improving your yoga with our pose-estimation model while sharing your progress with friends with your animated plant-friend."/>
                    <ProjectSection 
                        side="right" 
                        color="#63c841" 
                        fontColor="white" 
                        project="/spotify" 
                        image={Spotify}
                        projectName="Listen Up"
                        subtitle="Data-Driven Spotify Recommendations"
                        description="Revisit classics and discover new music using our data-driven algorithms. We guarantee that you'll find the right songs for your occasion."/>
                    <ProjectSection 
                        side="left" 
                        color="#1d3557" 
                        fontColor="white" 
                        project="/tweets" 
                        image={Tweet}
                        projectName="Covid Tweets"
                        subtitle="Analyzing Covid-Related Tweets"
                        description="A visualization and analysis of the nature of COVID-19 vaccine related tweets throughout the pandemic using Machine Learning and Sentiment Analysis."/>
                    <ProjectSection 
                        side="right" 
                        color="#f77c52" 
                        fontColor="white" 
                        project="/recipe" 
                        image={Recipe}
                        projectName="Recipe"
                        optional={<sup>-1</sup>}
                        subtitle="Recipe Finder and Meal Planner"
                        description="Input the items you have to cook with and recieve recipes that you can make with those ingredients. Add those dishes to your meal plan and visualize your calories in a week."/>
                    <ProjectSection 
                        side="left" 
                        color="#A8DADC" 
                        fontColor="black" 
                        project="/insta" 
                        image={Insta}
                        projectName="InstaLite"
                        subtitle="A lite version of Instagram"
                        description="Join the Django-powered Instagam Lite version, where you can create accounts, make and delete posts with images and text, and comment and like others’ posts."/>
                </div>
            </div>
        );
    }
}

export default MyWork;