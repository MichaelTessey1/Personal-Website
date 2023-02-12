import React, {useState} from 'react';
import { TypeAnimation } from 'react-type-animation';


import './App.css';
import Landing from './content/Landing/Landing.js'
import About from './content/About/About.js'
import Projects from './content/Projects/Projects.js'
import Experience from './content/Experience/Experience.js'


const App = () => {

  //Animation for content on the page
  const [index, setIndex] = useState(0);
  const contents = [
    "Landing",
    "About",
    "Projects",
    "Experience"
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

  const changeContent = (id) => {
    setIndex(id);
    console.log('CONTENT, ', id)
  }

  console.log(index)
  return (
    <div className="App">
      {/* ------------------------------ STARS  ----------------------------------- */}

      <div class="stars">
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
      </div>


      {/* ----------------------------- HEADER ------------------------------------ */}
      <header>

        <p className="name">Michael Tse</p>

        <div className="sub-header-container">
          <TypeAnimation
            sequence={['Web Developer', 2000, 'Software Engineer', 2000, 'Gym Enthusiast',
                      2000, 'Hunter Graduate', 2000]}
            style={{ fontSize: '1em' }}
            wrapper="div"
            repeat={Infinity} 
          />
        </div>

      </header>

      {/* ---------------------------- NAV & CONTENT --------------------------------- */}
      <div className = "content-container">

        <nav>
          <ul>
            <li onClick = {() => changeContent(0)}>
              Home
              <span></span><span></span><span></span><span></span>
            </li>
            <li onClick = {() => changeContent(1)}>
              About Me
              <span></span><span></span><span></span><span></span>
            </li>
            <li onClick = {() => changeContent(2)}>
              Projects
              <span></span><span></span><span></span><span></span>
            </li>
            <li onClick = {() => changeContent(3)}>
              Experiences
              <span></span><span></span><span></span><span></span>
            </li>
          </ul>
        </nav>

        <div className = "content" onWheel={handleScroll}>
          {index === 0 ? <div className = {`content-detail ${index === 0 ? 'active' : ''}`}><Landing/></div> : <div className = {`content-detail`}><Landing/></div>}
          {index === 1 ? <div className = {`content-detail ${index === 1 ? 'active' : ''}`}><About/></div> : <div className = {`content-detail`}><About/></div>}
          {index === 2 ? <div className = {`content-detail ${index === 2 ? 'active' : ''}`}><Projects/></div> : <div className = {`content-detail`}><Projects/></div>}
          {index === 3 ? <div className = {`content-detail ${index === 3 ? 'active' : ''}`}><Experience/></div> : <div className = {`content-detail`}><Experience/></div>}
        </div>

      </div>
      
      {/* ----------------------------- FOOTER ---------------------------------------- */}
      <footer>
        <p>
          Copyright &copy; 2023 Michael Tse. All rights are resevered
        </p>
      </footer>
    </div>
  );
}

export default App;
