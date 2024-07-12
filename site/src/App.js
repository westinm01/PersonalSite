import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero.js';
import About from './components/About.js';
import ProjectList from './components/ProjectList.js';
import CourseList from './components/CourseList.js';
import Experience from './components/Experience.js';
import ExperienceList from './components/ExperienceList.js';
import Links from './components/Links.js';

//import {useState} from 'react';
import EducationList from './components/EducationList.js';


function App() {
  //const [pageName, SetPageName] = useState(0);

  return (
    <div className="App">
      <div className = "content" style = {{display: 'flex', justifyContent: 'space-evenly'}}>
        <div className = "section">
        <Hero></Hero>
        <About></About>
        <CourseList></CourseList>
        <ExperienceList></ExperienceList>
        </div>
        <div className = "section">
        <ProjectList></ProjectList>
        <EducationList></EducationList>
        </div>
        
        </div >
        <Links></Links>
        
    </div>
  );
}

export default App;
