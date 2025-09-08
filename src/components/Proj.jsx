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
        description="Tuinue wasichana was built to help young girls get the support they need to become better versions of themselves. It was a collaborative project." 
        tech={["React", "CSS", "Python", "Flask", "PostgreSQL"]}
        liveLink=""
        repoLink="https://github.com/moses-25/Tuinue-wasichana"
      />

      <ProjectCard
        image={skill}
        title="Skill Forge"
        description="A web app to learn new skills and track the skills learnt  over time. Built with a focus on user experience and interactivity."
        tech={["React", "Python", "CSS", "Flask", "PostgreSQL"]}
        liveLink="https://spotify-live.com"
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
        description="A weellness app to help users suffering from diabetes to monitor their body, sugar levels and generally their health. Stores medical history links them with specialists in the field as well and also curates a diet that will help them manage their condition."
        tech={["React", "Python", " Tailwind CSS", "Flask", "PostgreSQL"]}
        liveLink=""
        repoLink=""
        flipped
      />

      <ProjectCard
        image="https://t3.ftcdn.net/jpg/03/32/17/62/360_F_332176236_o8QFSuv86SjfqWuTa5h6jbt4zHFbbbDG.jpg"
        title="theADVENTURE"
        description="A more personal project, that will be used to showcase my adventures and short films(i love adventures and have a love of creating short films) It will also be a blog to share my experiences and tips on travelling and filmmaking." 
        tech={["React", "Tailwind CSS", "Flask", "PostgreSQL", "Python"]}
        liveLink=""
        repoLink=""
      />
    </div>
  );
};

export default Proj;
