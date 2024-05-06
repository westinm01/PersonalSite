import "./Project.css";

var available_platforms= [];

function GetPlatforms(props){
    if(props.web === "True"){
        available_platforms.push();
    }
    //if on the web, show www icon
    //if on android, display android icon
    //if on steam, show steam icon
    return available_platforms;
}


export default function Project(props){
    return(
    <div  className = "project-component">
    <a href = {props.url? props.url : '#'}>
        
        <div className = "project-text">
            <h2 className = "project-title">{props.title}</h2>
            <div className = "project-content">
                
                <p className = "project-desc"> {props.desc}</p>
                <img src = {props.image} alt = {props.img_text} className = "project-image"/>
            </div>
        </div>
        
    </a>
    </div>)
}