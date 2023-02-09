import React, {useState} from 'react';
import './App.css';
import Landing from './content/Landing/Landing.js'
import About from './content/About/About.js'
import Projects from './content/Projects/Projects.js'
import Skills from './content/Skills/Skills.js'

const App = () => {
  const [index, setIndex] = useState(0);
  const contents = [
    "Landing",
    "About",
    "Projects",
    "Ski"
  ];

  const handleScroll = (event) => {
    event.preventDefault();
    const delta = event.deltaY;
    if (delta > 0) {
      setIndex(index + 1 >= contents.length ? 0 : index + 1);
    } else {
      setIndex(index - 1 < 0 ? contents.length - 1 : index - 1);
    }
  };
  console.log(index)
  return (
    <div className="App">
      
      <header>
        <h1 className="Name">Michael Tse</h1>
        <h4>Web Developer & SE</h4>
      </header>

      <div className = "content" onWheel={handleScroll}>
        <div className = {`content-detail ${index === 0 ? 'active' : ''}`}>{index === 0 ? <Landing/> : index >=0 ? "" : <div>Loading</div>}</div>
        <div className = {`content-detail ${index === 1 ? 'active' : ''}`}>{index === 1 ? <About/> : index >=0 ? "" : <div>Loading</div>}</div>
        <div className = {`content-detail ${index === 2 ? 'active' : ''}`}>{index === 2 ? <Projects/> : index >=0 ? "" : <div>Loading</div>}</div>
        <div className = {`content-detail ${index === 3 ? 'active' : ''}`}>{index === 3 ? <Skills/> : index >=0 ? "" : <div>Loading</div>}</div>
      </div>

      <footer>
        <p>
          Copyright &copy; 2023 Michael Tse. All rights are resevered
        </p>
      </footer>
    </div>
  );
}

export default App;
