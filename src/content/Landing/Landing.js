import React from 'react';
import { FaReact } from 'react-icons/fa';
import './Landing.css';

const Landing = () => {
  return (
    <div className='Landing'>
      <div>Hi there, I'm</div> <br/>
      <div>Tessey</div> <br/>
      <div>Full Stack Developer</div> <br/>
      <div>I am a programer from New York</div> <br/>
      <div>and I absolutely love working with <FaReact size="20px" color="#61DAFB" /></div>
    </div>
  );
};

export default Landing;