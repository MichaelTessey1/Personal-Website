import React, {useState} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import aria from '../Images/Aria.png'
import codenames from '../Images/codenames.png'
import photowing from '../Images/photowing.png'
import anistorm from '../Images/anistorm.png'


import './Projects.css';

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll:1,
    autoplaySpeed: 4000,
    cssEase: "linear",
    autoplay: true,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <div className = "Projects">
      <div className = "projects-wrap">
        <Slider {...settings} className="slider">
          <img className='ProjImg' src={aria} alt="Aria"></img>
          <img className='ProjImg' src={codenames} alt="Codenames"></img>
          <img className='ProjImg' src={photowing} alt="PhotoWing"></img>
          <img className='ProjImg' src={anistorm} alt="Anistorm"></img>
        </Slider>

        <div className="project-description">
          {currentSlide === 0 ? 
            <div className="pd-wraper">
              <div className="pd-name">Aria</div>
              <p className="pd-description">Aria is a web application that allows users to join a virtual room with their friends, 
                where they can collectively listen to music or watch YouTube videos. Incorporated chat communication to enhance social 
                interaction within the virtual room. Created an engaging platform that provides a collaborative and interactive experience 
                for users to enjoy music and video content together.</p>
              <div className="pd-icons-container">
                <img src="https://cdn-icons-png.flaticon.com/512/7439/7439488.png" alt="React icon" className="pd-icon"/>
                <img src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png" alt="Firebase" className="pd-icon"/>
                <img src="https://static-00.iconduck.com/assets.00/brand-socket-io-icon-512x512-3zrjje7c.png" alt="Socket io icon" className="pd-icon"/>
              </div>
              <a href="https://youtu.be/nkq0dWIijSU" className="links">Demo</a>
            </div> : ""}

          {currentSlide === 1 ? 
            <div className="pd-wraper">
              <div className="pd-name">CodeNames</div>
              <p className="pd-description">CodeNames is a capstone project that I worked on with 4 others. We recreated codenames using JS's React, 
                Python's Django. This was used to store the current situation of the games progression, but in order to make it interactive with others,
                we used Django Channels to act as our websocket. This project became important to me because my team depended on me for putting it all
                together. Thus allowing me to help my teammates learn web development as well as helping me learn new tech.</p>
              <div className="pd-icons-container">
                <img src="https://cdn-icons-png.flaticon.com/512/7439/7439488.png" alt="React icon" className="pd-icon"/>
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png" alt="Python" className="pd-icon"/>
                <img src="https://cdn-icons-png.flaticon.com/512/9307/9307630.png" alt="Django" className="pd-icon"/>
                <img src="https://cdn-icons-png.flaticon.com/512/873/873120.png" alt="heroku" className="pd-icon"/>
                <img src="https://user-images.githubusercontent.com/7853266/44114706-9c72dd08-9fd1-11e8-8d9d-6d9d651c75ad.png" alt="postman" className="pd-icon"/>
              </div>
              <a href="https://codenames21.herokuapp.com/" className="links">Link</a>
            </div> : ""}

          {currentSlide === 2 ? 
            <div className="pd-wraper">
              <div className="pd-name">PhotoWing</div>
              <p className="pd-description">PhotoWing is a React Native app connected to a Ruby on Rails backend and Firebase Authentication. 
                The purpose of this app is to simply all the user to take photos and write a description based on the photos that they took. 
                Though its like most social media applications, this one isn't for social media but rather ones own personal safekeep. 
                A collection of photos with a description to help remember.</p>
              <div className="pd-icons-container">
                <img src="https://cdn-icons-png.flaticon.com/512/7439/7439488.png" alt="React icon" className="pd-icon"/>
                <img src="https://cdn-icons-png.flaticon.com/512/1180/1180304.png" alt="Phone" className="pd-icon" />
                <img src="https://cdn-icons-png.flaticon.com/512/6132/6132219.png" alt="Ruby" className="pd-icon"/>
                <img src="https://www.pngfind.com/pngs/m/344-3441378_ruby-on-rails-ruby-on-rails-logo-png.png" alt="Rails" className="pd-icon"/>
                <img src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png" alt="Firebase" className="pd-icon"/>
              </div>
              <a href="https://expo.dev/@michaeltessey1/photowing" className="links">Link</a>
            </div> : ""}

          {currentSlide === 3 ? 
            <div className="pd-wraper">
              <div className="pd-name">Anistorm</div>
              <p className="pd-description">Anistorm is React website utilizing Kitsu's anime API which allows the users who are new to anime find 
                a series that they may like. It's a simple website that produces a list of animes based on genre's and if there is a series they're
                interested in, they can look up the title for a better description. It's also one of my earliest experiences learning to implement API's
              </p>
              <div className="pd-icons-container">
                <img src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png" alt="HTML" className="pd-icon"/>
                <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="CSS" className="pd-icon"/>
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="Javascript" className="pd-icon"/>
                <img src="https://cdn-icons-png.flaticon.com/512/7439/7439488.png" alt="React icon" className="pd-icon"/>
                <img src="https://cdn-icons-png.flaticon.com/512/8297/8297437.png" alt="API icon" className="pd-icon"/>
              </div>
              <a href="http://lewd-yoke.surge.sh/" className="links">Link</a>
            </div> : ""}

        </div>
      </div>
    </div>
  );
};

export default Projects;
