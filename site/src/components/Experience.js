import React from 'react';
import './Experience.css';

export default function Experience(props){
    return(
        <div className = "experience">
            <div className = "exp-header"><div><span className = "job-title">{props.title}</span><p className = "exp-dates">{props.dates}</p></div><img src = {props.cimg} className = "company-img"></img></div>
            
            <p>{props.description}</p>
        </div>
    );
}