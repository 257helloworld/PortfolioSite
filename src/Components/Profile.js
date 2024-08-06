import React from "react";
import "./Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Tooltip } from "@mui/material";
import { faEnvelopeCircleCheck } from "@fortawesome/free-solid-svg-icons";
function Profile() {
  const socialAccounts = [
    {
      name: "LinkedIn",
      icon: faLinkedin,
      url: "https://linkedin.com/in/aditya-kadamm",
    },
    {
      name: "Github",
      icon: faGithub,
      url: "https://github.com/257helloworld",
    },
    {
      name: "Email",
      icon: faEnvelopeCircleCheck,
      tooltip: "Mail: a.a.kadam@outlook.com",
      type: "email",
      url: "mailto:a.a.kadam@outlook.com",
    },
  ];

  const handleSocialClick = (account) => {
    window.open(account.url, "_blank");
  };

  return (
    <div className="profileCardContainer">
      <div className="profileCard">
        <div className="profileCircle">
          <img src="profile_picture.jpeg"></img>
        </div>
        <div className="profileHeader">
          <p>
            Hi, I'm <span className="highlight">Aditya Kadam</span>
          </p>
          <p>Full Stack Developer.</p>
        </div>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae fugiat
          ipsa impedit tempora est error, dignissimos ut rem laudantium ipsum.
        </p>
        <div className="buttonsContainer flex">
          {socialAccounts.map((account, index) => (
            <Tooltip title={account?.tooltip || account.url} key={index}>
              <FontAwesomeIcon
                icon={account.icon}
                size="1x"
                className="socialIcon"
                onClick={() => handleSocialClick(account)}
              />
            </Tooltip>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
