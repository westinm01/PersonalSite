import React from 'react';
import './Experience.css';

export default function Experience(props){
    return(
        <div className = "experience">
            <div className = "exp-header"><span className = "job-title">{props.title}</span> <img src = {props.cimg} className = "company-img"></img></div>
            <p className = "exp-dates">{props.dates}</p>
            <p>{props.description}</p>
        </div>
    );
}