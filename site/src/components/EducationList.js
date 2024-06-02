import React from 'react'
import Education from './Education.js'

const educations = [
        {
            "university": "University of California, Riverside",
            "degree": "M.S. in Computer Engineering",
            "dates": "Sept 2022 - Jun 2023"
        },
        {
            "university": "University of California, Riverside",
            "degree": "B.S. in Computer Engineering",
            "dates": "Sept 2019 - June 2022"
        }
        ]

const EducationList = () => {
  return (
    <div>
    <h1 style = {{color: "white"}}>Education</h1>
    <ul className = "all-experiences">
        {educations.map(e => {
            return(<li><Education degree = {e.degree} dates = {e.dates} university = {e.university}></Education></li>);
        })}
        </ul>
    </div>
  )
}

export default EducationList