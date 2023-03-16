import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className = "About">

      <div className = "about-wrap">
        <div className = "about-me">
          <h1 className = "about-title">About Me</h1>
          <div className = "about-content">
            My name is <span className="highlight">Michael Tse</span> and I am a recent graduate from Hunter College with a Computer Science Degree.
            I've also completed General Assemblys Web Development Immersive. I am passionate about Web Development and have dedicated myself
            into working within the Web Development space and I hope to gain new and meaningful experiences as I pursue this career.
          </div>
          <div className = "about-extras">
            <div className = "about-extras-info"><img src = "https://cdn-icons-png.flaticon.com/512/1176/1176454.png" className = "icon" alt="location icon"/>  Location: New York, US</div>
            <div className = "about-extras-info"><img src = "https://cdn-icons-png.flaticon.com/512/1083/1083364.png" className = "icon" alt="interest icon"/>  Interest: Gym, Video Games</div>
            <div className = "about-extras-info"><img src = "https://cdn-icons-png.flaticon.com/512/1916/1916073.png" className = "icon" alt="school icon"/>  School: Hunter College</div>
            <div className = "about-extras-info"><img src = "https://cdn-icons-png.flaticon.com/512/7927/7927073.png" className = "icon" alt="cap degree icon"/>  Degree: Bachelors</div>
            <div className = "about-extras-info"><img src = "https://cdn-icons-png.flaticon.com/512/1389/1389091.png" className = "icon" alt="email icon"/>  Email: Michaeltessey1@gmai.com</div>
            <div className = "about-extras-info"><img src = "https://cdn-icons-png.flaticon.com/512/1180/1180304.png" className = "icon" alt="phone icon"/>  Phone: 646-209-2203</div>
          </div>
        </div>

        <div className = "tools">
          <h1 className="about-tools"> Tools </h1>
          <div className="tools-icons-container">
            <img src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png" className="tools-icon" alt="HTML"/>
            <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" className="tools-icon" alt="CSS"/>
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" className="tools-icon" alt="Javascript"/>
            <img src="https://cdn-icons-png.flaticon.com/512/7439/7439488.png" className="tools-icon" alt="React"/>
            <img src="https://cdn-icons-png.flaticon.com/512/919/919825.png" className="tools-icon" alt="Nodejs"/>
            <img src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" className="tools-icon" alt="Redux"/>
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968342.png" className="tools-icon" alt="postgresql"/>
            <img src="https://cdn-icons-png.flaticon.com/512/4494/4494749.png" className="tools-icon" alt="github"/>
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png" className="tools-icon" alt="python"/>
            <img src="https://user-images.githubusercontent.com/7853266/44114706-9c72dd08-9fd1-11e8-8d9d-6d9d651c75ad.png" className="tools-icon" alt="postman"/>
            <img src="https://cdn-icons-png.flaticon.com/512/873/873120.png" className="tools-icon" alt="heroku"/>
            <img src="https://cdn-icons-png.flaticon.com/512/9307/9307630.png" className="tools-icon" alt="django"/>
          </div>
        </div> 

      </div>

    </div>
  );
};

export default About;
