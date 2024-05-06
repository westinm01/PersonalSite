import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero.js';
import About from './components/About.js';
import ProjectList from './components/ProjectList.js';

function App() {
  return (
    <div className="App">
      <div className = "content" style = {{display: 'flex', justifyContent: 'space-evenly'}}>
        <div>
        <Hero></Hero>
        <About></About>
        </div>
        <ProjectList></ProjectList>
        </div>
    </div>
  );
}

export default App;
