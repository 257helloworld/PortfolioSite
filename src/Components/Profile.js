import React, { useState } from "react";
import "./Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Tooltip } from "@mui/material";
import { faEnvelopeCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Typed from 'typed.js';
import { useRef, useEffect } from "react";
import Skeleton from '@mui/material/Skeleton';

function Profile() {
  const [isProfileLoaded, setIsProfileLoaded] = useState(false)
  const autoType = useRef(null);
  const profileImg = useRef(null);
  const profileSkeleton = useRef(null)

  const profilePictureUrl = "https://firebasestorage.googleapis.com/v0/b/aditya-portfolio-site.appspot.com/o/profile_picture.jpeg?alt=media&token=b017ba0d-8927-46df-9488-7da95246ca15";

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

  useEffect(() => {
    const typed = new Typed(autoType.current, {
      strings: ["Full Stack Web Developer.", "Cross-Platform App Developer.", "UI Designer."],
      typeSpeed: 50,
      backDelay: 1000,
      showCursor: false,
      loop: true
    })

    return () => {
      typed.destroy();
    };
  }, [])

  const hideSkeleton = () => {
    profileSkeleton.current.style.display = "none";
    profileImg.current.style.display = "flex"
  }

  return (
    <div className="profileCardContainer">
      <div className="profileCard">
        <div className="profileCircle">
            <img ref={profileImg} style={{display: "none"}} onLoad={hideSkeleton} src={profilePictureUrl}></img>
          <Skeleton ref={profileSkeleton} animation="wave" className="loadingSkeleton" variant="circular" height={140} width={140} sx={{ bgcolor: 'grey.900' }}/>
        </div>

        <div className="profileHeader">
          <p>
            Hi, I'm <span className="highlight">Aditya Kadam</span>
          </p>
          <p className="autoType" ref={autoType}>Full Stack Developer.</p>
        </div>
        <p className="description">
        🇮🇳 Mumbai, In <br/>
        Let’s stay connected 🫱🏻‍🫲🏼
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
