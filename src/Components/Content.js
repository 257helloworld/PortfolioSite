import React from "react";
import AboutCard from "./Cards/AboutCard";
import "./Content.css";
import SkillsCard from "./Cards/SkillsCard";
import ProjectsCard from "./Cards/ProjectsCard";
import ContactCard from "./Cards/ContactCard";

function Content() {
  return (
    <div className="cardsContainer">
      <AboutCard />
      <SkillsCard />
      <ProjectsCard />
      <ContactCard/>
    </div>
  );
}

export default Content;
