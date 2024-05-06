import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero.js';
import About from './components/About.js';
function App() {
  return (
    <div className="App">
      <div className = "content">
        <Hero></Hero>
        <About></About>
        </div>
    </div>
  );
}

export default App;
