import React from 'react'
//import './ExperienceList.css'
import Experience from './Experience.js'
const experiences = [
        {
            "cname": "Carnegie Mellon University",
            "title": "Content Technology Developer",
            "dates": "Sept 2024 - Present",
            "cimg": "https://www.drupal.org/files/styles/grid-4-2x/public/CMU_Logo_Stack_Red.png?",
            "description": "Creating programmatic videos and interactive tools for an online Calculus I textbook. Consulting with engineers and math authors to develop tools and strategies for constructing a textbook aimed at reducing DFW rates across underrepresented groups nationwide."
        },
        {
            "cname": "UC Riverside",
            "title": "Lecturer",
            "dates": "Jun 2023 - Present",
            "cimg": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/UC_Riverside_logo.svg/2560px-UC_Riverside_logo.svg.png",
            "description": "Teaching courses in web development, embedded systems, data science, and OOP principles. Always creating innovative to improve student learning (especially in the difficult classes)."
        },
        {
            "cname": "UC Riverside",
            "title": "Teaching Assistant",
            "dates": "Jan 2023 - Jun 2023",
            "cimg": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/UC_Riverside_logo.svg/2560px-UC_Riverside_logo.svg.png",
            "description" : "Held lab sessions and delivered guest lectures on various topics, including boolean logic, finite state machines, and floating-point/signed binary representation."
        },
        {
            "cname": "UC Riverside Brain Game Center",
            "title": "Research Assistant Programming Intern",
            "dates": "Apr 2022 - May 2022",
            "cimg" : "https://braingamecenter.ucr.edu/wp-content/uploads/2020/07/bgc-logo.png",
            "description": "Enhanced UX of existing projects by integrating new features and intuitive responsive design using C# in Unity while also ensuring iOS compatibility through unit & functional testing."
        }
    ]
const ExperienceList = () => {
  return (
    <div>
        <h1 style = {{color: "white"}}>Experience</h1>
        <ul className = "all-experiences">
            {experiences.map(e => {
                return(<li><Experience cname = {e.cname} title = {e.title} dates = {e.dates} cimg = {e.cimg} description = {e.description}></Experience></li>);
            })}
            </ul>
        </div>
  )
}

export default ExperienceList