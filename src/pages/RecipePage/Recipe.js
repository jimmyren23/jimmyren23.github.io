import React, { Component } from 'react';
import RecipeImage from '../../images/RecipeBoard.png'
import Arrow from '../../images/rightarrow.png';

class Recipe extends Component {
    componentDidMount() {
        document.body.classList.add("recipe");
        }
    
    componentWillUnmount() {
        document.body.classList.remove("recipe");
    }
        
    render() {
        return (
            <div className="project-page">
                <div className="project-page-header">
                    <h1> Recipe<sup>-1</sup> </h1>  
                </div>
                <div className="project-page-image">
                    <img src={RecipeImage} alt="Example" />
                </div>
                <div className="project-page-all-sections"> 
                    <hr/>
                    <div className="project-page-overview">
                        <div className="project-section-header">
                            <h2> Overview </h2>
                        </div>
                        <div className="project-section-para">
                            <p> This is a recipe-finding app that takes your ingredients and determines a meal for you! You can create your meal plan for the week, while also visualizing your daily calorie intake. </p>
                            <p> I implemented the basic features such as looking up recipes with any number of ingredients, easy link access to the recipes you want, adding meals to your meal plan for the week, choosing the day and time of the week with calories, or even graphing your calories for the week.</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="project-page-role">
                        <div className="project-section-header">
                            <h2> My Role </h2>
                        </div>
                        <div className="project-section-para">
                            <p> As this was my final project for my iOS course, CIS-195, I created the entire app from scratch. From start to finish, I implemented each of the screens after deciding on my MVC (model-view-controller). </p>
                            <p> Building upon other mini-apps that we had been doing during the semester individually, this app gave me the chance to use everything I learned, including APIs, package management, screen navigation, and the app lifecycle.</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="project-page-motivation">
                        <div className="project-section-header">
                            <h2> Motivation </h2>
                        </div>
                        <div className="project-section-para">
                            <p> Many times, I found myself peering into the fridge unable to know what to make. By making this app, I wanted to have easy access to recipes soley based on my supplies. </p>
                            <p> I also wanted an easy way for me to keep track of my calories for the week, so I wanted it to also visualize what days I was eating more than others while sticking to a schedule.</p>
                        </div>
                    </div>  
                    <hr/>
                    <div className="project-page-tech">
                        <div className="project-section-header">
                            <h2> Technology</h2>
                        </div>
                        <div className="project-section-para">
                            <p> The technologies I used for this project include SwiftUI/Storyboard, KingFischer,and Charts. I had also connected this app to an API service for all of the recipes and nutritional facts.</p>
                        </div>
                    </div>  
                    <hr/>
                    <div className="project-page-links">
                            <div className="project-section-header">
                                <h2> Links </h2>
                            </div>
                            <div className="project-section-para">
                                <a href="https://github.com/jimmyren23/Recipe-1"> Go to GitHub Repository <img src={Arrow} alt="arrow"/> </a> 
                            </div>
                        </div>  
                    <hr/>
                </div>
            </div>
        );
    }
}

export default Recipe;