import React, { Component } from 'react';
import TweetImage from '../../images/TweetBoard.png'
import Arrow from '../../images/rightarrow.png';

class Tweets extends Component {
    componentDidMount() {
        document.body.classList.add("tweets");
        }
    
    componentWillUnmount() {
        document.body.classList.remove("tweets");
    }
        
    render() {
        return (
            <div className="project-page">
                <div className="project-page-header">
                    <h1> COVID Tweets </h1>  
                </div>
                <div className="project-page-image">
                    <img src={TweetImage} alt="Example" />
                </div>
                <div className="project-page-all-sections"> 
                    <hr/>
                    <div className="project-page-overview">
                        <div className="project-section-header">
                            <h2> Overview </h2>
                        </div>
                        <div className="project-section-para">
                            <p>  In this project, we aimed to study and visualize the nature of COVID-19 vaccine related tweets throughout the pandemic–– with a special focus on the sentiment of tweets accross time and location. </p> 
                            <p> We began with exploratory data analysis to extract sentiment and location of tweets and visualized our findings. Next, we used various machine learning models to predict popularity (via number of retweets) of vaccine-related tweets. Finally, we attempted a time series analysis to see if we could find patterns in the popularity of tweets over time but found that it was difficult to do given the nature of our dataset.</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="project-page-role">
                        <div className="project-section-header">
                            <h2> My Role </h2>
                        </div>
                        <div className="project-section-para">
                            <p> I helped with preprocessing the original data-set from Kaggle so that we could easily apply any sentiment or regression analysis. I also helped geocode the twitter data in order to find where the most popular tweets were coming from. </p> 
                            <p> I then applied NLP techniques to do sentiment analyses alongside creating various regression models, including a logistic and random forest. I also did an ADF test to check for a possible seasonality. </p>
                            <p> The rest of my group, consisting of two other members, had primarily focused on creating the visualizations using MatPlotLib and doing preprocessing for the project. </p>
                        </div>
                    </div>
                    <hr/>
                    <div className="project-page-motivation">
                        <div className="project-section-header">
                            <h2> Motivation </h2>
                        </div>
                        <div className="project-section-para">
                            <p>With this project, we intended to study and visualize the nature of COVID-19 vaccine related tweets throughout the pandemic–– especially the sentiment of the tweets (e.g. sentiment across countries, over time, and in regards to different vaccine producers). Our ultimate goal was to to learn more about what people have been saying about COVID vaccines on Twitter with a focus on how sentiment has changed over time. </p>
                            <p>We think this project is interesting because we were able to do an in depth analysis of how the general public feels towards various COVID vaccines via Twitter. This was especially relevant given the current worldwide vaccination effort.</p>
                        </div>
                    </div>  
                    <hr/>
                    <div className="project-page-tech">
                        <div className="project-section-header">
                            <h2> Technology</h2>
                        </div>
                        <div className="project-section-para">
                            <p> In Google Colab, we used python and various python packages (NLTK, Pandas, Afinn, Geocoder, SKLearn, etc.) in order to do our analyses and visualizations. </p>
                        </div>
                    </div>  
                    <hr/>
                    <div className="project-page-links">
                        <div className="project-section-header">
                            <h2> Links </h2>
                        </div>
                        <div className="project-section-para">
                            <a href="https://colab.research.google.com/drive/1oEyRCWfkBVaFWPqA2bO7hQikSvMCOyox?usp=sharing"> Go to Google Colab <img src={Arrow} alt="arrow"/> </a> 
                        </div>
                    </div>  
                    <hr/>
                </div>
            </div>
        );
    }
}

export default Tweets;