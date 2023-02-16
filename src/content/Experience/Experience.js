import React from 'react';
import './Experience.css';

import maco from '../Images/maco.png'
import ga from '../Images/GAlogo.png'

const Experience = () => {
  return (
    <div className = "Experience">

      <div className = "e-wrap">

        <div className="maco-e">
          <img src={maco} alt="maco page" className="m-img"/>
          <div className = "maco-content">
            <div className="maco-title">Maco</div>
            <ul className="m-list">
              <li>Familiarized with Python, Django, and Foundation for Full-Stack Development</li>
              <li>Spearheaded a project for Military Appreciation Month,  which promoted 15% of new users</li>
              <li>Worked with cross-functional teams to ensure quality product from research and marketing to deployment</li>
              <li>Re-design the current checkout page to be mobile responsive and to improve user experience</li>
            </ul>
          </div>
        </div>

        <div className="ga-e">
          <div className = "ga-content">
            <div className="ga-title">General Assembly</div>
            <ul className="ga-list">
              <li>Created full stack applications utilizing HTML/CSS, JavaScript, React, Node, Express, PostgreSQL, and Ruby on Rails</li>
              <li>Collaborated with UX/UI designers to redesign restaurant websites implementing agile methodologies  </li>
            </ul>
          </div>
          <img src={ga} alt="ga logo" className="g-img"/>
        </div>

      </div>

    </div>
  );
};

export default Experience;
