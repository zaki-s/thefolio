import React from "react";
import ProjectCard from "./ProjectCard";
import Tuinue from "../assets/images/tuinue.png"
import skill from "../assets/images/skill.png"
import lootbox from "../assets/images/lootbox.png"

const Proj = () => {
  return (
    <div className="projcont">
      <h2 className="projhead">Projects I’ve worked...</h2>

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
        tech={["HTML", "CSS", "API", "JavaScript"]}
        liveLink="https://zaki-s.github.io/LOOTBOX-gaming/"
        repoLink="https://github.com/zaki-s/LOOTBOX-gaming"
      />
    </div>
  );
};

export default Proj;
