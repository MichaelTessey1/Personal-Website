import React from 'react';
import { FaReact } from 'react-icons/fa';
import './Landing.css';
import Baji from '../Images/baji2.jpg'

const Landing = () => {
  return (
    <div className='Landing'>
      <div className = "wrap">
        <div className = 'landing-container'>
          <div className = "t1">Hi there, I'm Michael but also known as,</div> <br/>
          <div className = "t2">Tessey</div> <br/>
          <div className = "t3">I am a Full Stack Developer from New York</div> <br/>
          <div className = "t4">and I absolutely love working with <FaReact size="20px" color="#61DAFB" /></div>
        </div>
        <img src={Baji} alt="anime character that represents me" className = "baji"/>
      </div>
    </div>
  );
};

export default Landing;