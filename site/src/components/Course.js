import './Course.css'
import {motion} from "framer-motion";
function GetQuarters(quarters){
    return (
        <ul className = "quarters-taught">
        {quarters.map(quarter => <li>{quarter.season.substring(0,2)}{quarter.year}</li>)}
        </ul>
    );
}



export default function Course(props){
    return(
        <motion.div className = "course" variants = {{hidden: {opacity:0, y:25}, show: {opacity:1, y:0}}} transition = {{duration: 0.5, ease : "easeOut", delay: props.delayTime}}>
            <p className = "name"><strong>{props["cname"]}</strong></p>
            <p className = "title">{props.title}</p>
            <div className = "quarter-list">
                {GetQuarters(props.quarters)}
            </div>
        </motion.div>
    );
}