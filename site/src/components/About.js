import './About.css';
import {useState} from 'react';
import {motion} from "framer-motion";

export default function About(props){

    return(
        <div id = "about-section">
        <h2 >About Me</h2>
        <p>I'm a Computer Engineer from California! My interests pertain to Game Development, AI/ML, Data Science, Full-Stack Web Development, and Embedded Systems.</p>
        </div>
    );
}