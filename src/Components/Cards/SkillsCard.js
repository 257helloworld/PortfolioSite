import React from "react";
import {
  faReact,
  faPython,
  faNode,
  faFigma,
  faHtml5,
  faCss3,
  faJs,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "@mui/material";
import "./SkillsCard.css";

function SkillsCard() {
  let skills = [
    {
      name: "React Js",
      icon: faReact,
    },
    {
      name: "Node Js",
      icon: faNode,
    },
    {
      name: "HTML",
      icon: faHtml5,
    },
    {
      name: "CSS",
      icon: faCss3,
    },
    {
      name: "JavaScript",
      icon: faJs,
    },
    {
      name: "Python",
      icon: faPython,
    },
    {
      name: "Figma",
      icon: faFigma,
    },
    {
      name: "Git/Github",
      icon: faGithub,
    },
  ];
  return (
    <div className="content card">
      <p>My Skills</p>
      <div className="skillsContainer mt-5">
        {skills.map((skill, index) => (
          <>
            <Tooltip title={skill.name} placement="top">
              <div className="skillIconContainer" key={index}>
                <FontAwesomeIcon
                  className="skillIcon"
                  icon={skill.icon}
                  size="2x"
                />
              </div>
            </Tooltip>
            {/* <div className="toolTip">Hello</div> */}
            {/* <p className="skillName mt-2">{skill.name}</p> */}
          </>
        ))}
      </div>
    </div>
  );
}

export default SkillsCard;
