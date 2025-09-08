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
          <span className="edu-num">02.</span> {showEducation ? 'Education' : 'Experience'} or...
        </h2>
      </div>
      <div className="edu-content">
        {showEducation ? (
          <div className="education-section">
            <h3>Education</h3>
            <ul>
              <li>
                <h4>2025 Feb - 2025 Aug</h4>
                <p>Moringa school</p>
                <p>I enrolled into Moringa to upskill and also connect with like minded people in the same field and I learned so much in my time there, collaboration, team leading and overally the whole deeper essence of developing.</p>
              </li>
              <li>
                <h4>2023 Nov - 2025 Feb</h4>
                <p>Self Learning (Software Engineering)</p>
                <p>I took a step to start lerning something i like and love, using free resources like free codecamp, Scrimba and the most used of all, YOUTUBE. It was a bit hectic but i learned alot during this time!</p>
              </li>
              <li>
                <h4>2020 Jan - 2021 October</h4>
                <p>Thika Technical Training Institute</p>
                <p>I enrolled to get a Certificate and Diploma in Mech.Eng but it wasnt really my thing, it didnt quite make me feel happy and so i left it behind to pursue something that gives me joy!</p>
              </li>
              <li>
                <h4>2016 - 2019</h4>
                <p>Kenyatta Highschool</p>
                <p>KCSE Certificate</p>
              </li>
            </ul>
          </div>
        ) : (
          <div className="experience-section">
            <h3>Experience</h3>
            <ul>
              <li>
                <h4>2023 June - 2024 March</h4>
                <p>Commercial Agribusiness</p>
                <p>Lead Superviser (Personall Business)</p>
                <p>I invested into commercial farming in Taveta, producing Tomatoes as the main produce and selling to vendors in Mombasa, Taveta and sometimes Tanzania as well. Challenges faced were breaking into market due to my age, but in the long run it really taught me how to run a business lead a whole team and have a good rapport between you (a leader) and your workers.</p>
              </li>
              <li>
                <h4>2021 Feb - 2021 April</h4>
                <p>Sichey Automotive</p>
                <p>Technical Personell</p>
                <p>DUring this short period that was an attachment, i served in the Technical team in the company Servicing Cars and fixing Technical issues. The stay there instilled skills on working with otthers and also working under pressure as well!</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Edu;