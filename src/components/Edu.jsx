import React, { useState } from 'react';
import './Edu.css';

const Edu = () => {
  const [showEducation, setShowEducation] = useState(true);

  const toggleSection = () => {
    setShowEducation(!showEducation);
  };

  return (
    <div className="edu-container">
      <div className="edu-header">
        <h2 className="edu-title" onClick={toggleSection}>
          <span className="edu-num">0.2</span> {showEducation ? 'Education' : 'Experience'} or...
        </h2>
      </div>
      <div className="edu-content">
        {showEducation ? (
          <div className="education-section">
            <h3>Education</h3>
            <ul>
              <li>
                <h4>Present</h4>
                <p>Institution Name</p>
                <p>Degree/Certificate</p>
              </li>
              <li>
                <h4>2020-2024</h4>
                <p>University Name</p>
                <p>Bachelor of Science in Computer Science</p>
              </li>
              <li>
                <h4>2016-2020</h4>
                <p>High School Name</p>
                <p>High School Diploma</p>
              </li>
            </ul>
          </div>
        ) : (
          <div className="experience-section">
            <h3>Experience</h3>
            <ul>
              <li>
                <h4>2022-Present</h4>
                <p>Company Name</p>
                <p>Software Engineer</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </li>
              <li>
                <h4>2020-2022</h4>
                <p>Another Company</p>
                <p>Junior Developer</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Edu;