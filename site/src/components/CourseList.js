import Course from "./Course";
import {motion} from "framer-motion";

const coursesTaught = [
    
    {cname: "CS009A", title: "Data Oriented Introduction to Computing I", quarters: [
        {season: "Fall", year: 24},
        {season: "Summer", year: 24},
        {season: "Spring", year: 24},
        {season: "Fall", year: 23},
        {season: "Summer", year: 23} 
        ]
    },
    {cname: "CS009B", title: "Data Oriented Introduction to Computing II", quarters: [

        {season: "Winter", year: 24}
        
        ]
    },
    {cname: "CS009C", title: "C++ For Programmers", quarters: [
        {season: "Fall", year: 24},
        {season: "Winter", year: 24}
        
        ]
    },
    {cname: "CS010A", title: "C++ I", quarters: [
        {season: "Spring", year: 25},
        {season: "Winter", year: 25},
        {season: "Fall", year: 23}
        
        ]
    },
    {cname: "CS010B", title: "C++ II", quarters: [
        {season: "Winter", year: 25},
        {season: "Summer", year: 24},
        {season: "Winter", year: 24},
        
        
        ]
    },
    {cname: "CS110", title: "Principles of Web Development", quarters: [
        {season: "Spring", year: 25},
        {season: "Spring", year: 24}
        
    ]
    },
    {cname: "CS120B", title: "Introduction to Embedded Systems", quarters: [
        {season: "Summer", year: 24}
        
    ]
    }

];



export default function CourseList(){
    let staggerDelay = 0;
    return(
        <div>
        <h1 style = {{color: "white"}}>Courses Taught</h1>
        <motion.div id = "course-list" variants = {{hidden: {opacity: 0}, show: {opacity: 1}}} initial = "hidden" animate = "show">
            
            <ul className = "all-courses">
            {coursesTaught.map(course => {
                staggerDelay += 0.2;
                return(<li><Course cname = {course.cname} title = {course.title} quarters = {course.quarters} delayTime = {staggerDelay}></Course></li>);
            })}
            </ul>
        </motion.div>
        </div>
    )
}