import React from "react";
import "./Proj.css";
import ProjectCard from "./ProjectCard";
import Tuinue from "../assets/images/tuinue.png"
import skill from "../assets/images/skill.png"
import lootbox from "../assets/images/lootbox.png"

const Proj = () => {
  return (
    <div className="projcont">
      <h2 className="projhead"><span className="projheadnum">03.</span>Projects I’ve worked/working on...</h2>

      <ProjectCard
        image={Tuinue}
        title="Tuinue Wasichana"
        description="Tuinue Wasichana was built to empower young girls by providing the support and resources they need to grow into the best versions of themselves. This was a collaborative project where I worked closely with a team to design, develop, and deliver a meaningful solution with real social impact." 
        tech={["React", "CSS", "Python", "Flask", "PostgreSQL"]}
        liveLink=""
        repoLink="https://github.com/moses-25/Tuinue-wasichana"
      />

      <ProjectCard
        image={skill}
        title="Skill Forge"
        description="A web application designed to help users discover new skills and track their learning progress over time. Built with a strong emphasis on user experience, interactivity, and a clean, intuitive interface to keep learning both engaging and accessible."
        tech={["React", "Python", "CSS", "Flask", "PostgreSQL"]}
        liveLink=""
        repoLink="https://github.com/zaki-s/SF-PHASE4-FE"
        flipped
      />

      <ProjectCard
        image={lootbox}
        title="Lootbox"
        description="Aweb app that generates random games to the user to help in finding new exciting games to play" 
        tech={["HTML", "CSS", "-Public Game API-", "JavaScript"]}
        liveLink="https://zaki-s.github.io/LOOTBOX-gaming/"
        repoLink="https://github.com/zaki-s/LOOTBOX-gaming"
      />

      <ProjectCard
        image="https://t3.ftcdn.net/jpg/03/32/17/62/360_F_332176236_o8QFSuv86SjfqWuTa5h6jbt4zHFbbbDG.jpg"
        title="Thryve"
        description="A wellness app designed to support individuals living with diabetes by helping them monitor their health, track sugar levels, and manage their overall well-being. The app securely stores medical history, connects users with specialists, and curates personalized diet plans to make condition management easier and more effective."
        tech={["React", "Python", " Tailwind CSS", "Flask", "PostgreSQL"]}
        liveLink=""
        repoLink=""
        flipped
      />

      <ProjectCard
        image="https://t3.ftcdn.net/jpg/03/32/17/62/360_F_332176236_o8QFSuv86SjfqWuTa5h6jbt4zHFbbbDG.jpg"
        title="theADVENTURE"
        description="A personal passion project that brings together my love for adventure and filmmaking. This platform will showcase my travels and short films while doubling as a blog where I share stories, behind-the-scenes insights, and tips on exploring the world and capturing it through film. It’s more than just a portfolio piece—it’s a creative space where my journey as a traveler and storyteller comes to life." 
        tech={["React", "Tailwind CSS", "Flask", "PostgreSQL", "Python"]}
        liveLink=""
        repoLink=""
      />
    </div>
  );
};

export default Proj;
