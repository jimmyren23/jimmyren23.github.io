import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../App.css';
class Poga extends Component {


    render() {
        return (
            <div className="project-page">
                <div className="back-to-main">
                    <Link to='/'> Back </Link>
                </div>
                <div className="project-page-header">
                    <h1> Poga </h1>  
                </div>
                <div className="project-page-image">
                    insert image
                </div>
                <div className="project-page-overview">
                    <h2> Overview </h2>
                </div>
                <div className="project-page-motivation">
                    <h2> Motivation </h2>
                </div>  
                <div className="project-page-tech">
                    <h2> Technology Used </h2>
                </div>  
            </div>
        );
    }
}

export default Poga;