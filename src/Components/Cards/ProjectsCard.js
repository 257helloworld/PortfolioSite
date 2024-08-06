import React from "react";
import "./ProjectsCard.css";
import { Chip, Tooltip } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ProjectsCard() {
  const projects = [
    {
      title: "CoDrive - Car Pooling App",
      description:
        "A cross-platform (Android, iOS & Web) app that enables ride-sharing and connects drivers with riders commuting on similar routes, making commutes more efficient and eco-friendly.",
      technologies: [
        "Ionic React",
        "Flask",
        "Firebase Firestore",
        "Google Maps API",
        "New Long Tech",
        "Figma",
      ],
      icon: "/codrive_logo.png",
      githubUrl: "https://github.com/257helloworld/codrive",
    },
  ];

  const handleGithubClick = (url) => {
    window.open(url, "_blank");
  };
  return (
    <>
      <div className="content card">
        <p>Projects</p>
        <div className="mt-5">
          {projects.map((project) => (
            <div className="projectContainer">
              <img src={project.icon} alt="" className="projectIcon" />
              <div>
                <p className="projectTitle">
                  {project.title}
                  <Tooltip
                    title="View on Github"
                    className="githubIcon"
                    placement="top"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      onClick={() => handleGithubClick(project.githubUrl)}
                    />
                  </Tooltip>
                </p>
                <p>{project.description}</p>
                <div className="technologies mt-4">
                  {project.technologies.map((technology) => (
                    <Chip label={technology} variant="outlined"></Chip>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProjectsCard;
