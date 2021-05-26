import React, { Component } from 'react';
import Spotify from '../../images/SpotifyBoard.png'
import Arrow from '../../images/rightarrow.png';

class Recipe extends Component {
    componentDidMount() {
        document.body.classList.add("listen-up");
        }
    
    componentWillUnmount() {
        document.body.classList.remove("listen-up");
    }
        
    render() {
        return (
            <div className="project-page">
                <div className="project-page-header">
                    <h1> Listen Up </h1>  
                </div>
                <div className="project-page-image">
                    <img src={Spotify} alt="Listen Up Page" />
                </div>
                <div className="project-page-all-sections"> 
                    <hr/>
                    <div className="project-page-overview">
                        <div className="project-section-header">
                            <h2> Overview </h2>
                        </div>
                        <div className="project-section-para">
                            <p> We developed an app named ListenUp, which allows users to both explore old music and discover new music. You are able to find songs and artists that will fit the occasion you are looking for. You can also explore the most popular songs or delve deeper into patterns of songs in the most followed playlists. </p>
                        </div>
                    </div>
                    <hr/>
                    <div className="project-page-role">
                        <div className="project-section-header">
                            <h2> My Role </h2>
                        </div>
                        <div className="project-section-para">
                            <p> For my group, I created all the pages and assisted with writing the SQL queries. I had done some of the styling for the pages but I primarily focused on creating the necessary components from each of the 12 queries and connecting those queries with the back-end (AWS). </p>
                        </div>
                    </div>
                    <hr/>
                    <div className="project-page-motivation">
                        <div className="project-section-header">
                            <h2> Motivation </h2>
                        </div>
                        <div className="project-section-para">
                            <p> For my group’s final project in our database class, CIS 550, we wanted to create a service that could recommend songs based off previous data. This required us to be able to query those popular songs, while also having as much information about each song as we could. Therefore, we created a MySQL database containing multiple Spotify data sets for users to look for songs for any occasion.</p>
                        </div>
                    </div>  
                    <hr/>
                    <div className="project-page-tech">
                        <div className="project-section-header">
                            <h2> Technology</h2>
                        </div>
                        <div className="project-section-para">
                            <p> For data cleaning and preprocessing, we used R and Python, two very useful languages with APIs/libraries to handle data in the form of CSV and JSON. The data ingestion procedure will be discussed in the Database section below .For the back-end, we created queries using MySQL and hosted a database using AWS. </p>
                            <p> For  the  front-end,  we  created  a  React  application  that  communicates  with  our  database  using  Node.js,  andused CSS to style the different pages.  The application is split into the client side and the server side, where the client uses data fetched by the server to display and interact with the user, while the server side communicates directly with our AWS database. </p>
                        </div>
                    </div>  
                    <hr/>
                    <div className="project-page-links">
                        <div className="project-section-header">
                            <h2> Links </h2>
                        </div>
                        <div className="project-section-para">
                            <a href="https://github.com/molocule/cis450/tree/main/550_final"> Go to GitHub Repository <img src={Arrow} alt="arrow"/> </a> 
                            <a href="https://www.overleaf.com/read/jnscmhhxrhyf"> Go to Project Report <img src={Arrow} alt="arrow"/> </a> 
                        </div>
                    </div>  
                    <hr/>
                </div>
            </div>
        );
    }
}

export default Recipe;