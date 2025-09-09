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
                <p className="edusectitle"><a className="area" href="https://moringaschool.com/" target="/blank">Moringa school</a></p>
                <p className="edusectyap">I joined Moringa School to sharpen my skills and connect with like-minded individuals in the tech field. During my time there, I gained valuable experience in collaboration, team leadership, and a deeper understanding of the development process as a whole.</p>
              </li>
              <li>
                <h4>2023 Nov - 2025 Feb</h4>
                <p className="edusectitle">Self Learning (Software Engineering)</p>
                <p className="edusectyap">I took the initiative to dive into something I truly enjoy—software development—using free resources like FreeCodeCamp, Scrimba, and, most of all, YouTube. The journey was challenging at times, but it taught me consistency, problem-solving, and self-discipline. Through this process, I built a strong foundation in coding and proved to myself that with the right mindset, I can learn and grow even in tough situations.</p>
              </li>
              <li>
                <h4>2020 Jan - 2021 October</h4>
                <p className="edusectitle">Thika Technical Training Institute</p>
                <p className="edusectyap">I initially enrolled for a Certificate and Diploma in Mechanical Engineering, but I realized it wasn’t the right fit for me. Instead of settling, I chose to follow my passion and pursue a career in a field that truly excites me—technology and software development. A field that allows me to create in a way that resonates with me!</p>
              </li>
              <li>
                <h4>2016 - 2019</h4>
                <p className="edusectitle">Kenyatta Highschool</p>
                <p className="edusectyap">KCSE Certificate</p>
              </li>
            </ul>
          </div>
        ) : (
          <div className="experience-section">
            <h3>Experience</h3>
            <ul>
              <li>
                <h4>2023 June - 2024 March</h4>
                <p className="edusectitle">Commercial Agribusiness</p>
                <p className="role">Lead Supervisor (Personall Business)</p>
                <p className="edusectyap">I invested into commercial farming in Taveta, producing Tomatoes as the main produce and selling to vendors in Mombasa, Taveta and sometimes Tanzania as well. Challenges faced were breaking into the market due to my age but in the long run it really taught me how to run a business, lead a whole team and have good rapport between you (a leader) and your workers.</p>
              </li>
              <li>
                <h4>2021 Feb - 2021 April</h4>
                <p className="edusectitle"><a className="area" href="https://www.sicheyautomotive.com/" target="/blank">Sichey Automotive</a></p>
                <p className="role">Technical Personell</p>
                <p className="edusectyap">During my attachment, I worked with the Technical Team, where I gained hands-on experience servicing cars and troubleshooting technical issues. This experience strengthened my ability to collaborate effectively with others and taught me how to perform well under pressure.</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Edu;