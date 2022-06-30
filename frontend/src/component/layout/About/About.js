import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core"; 
import LinkedInIcon from "@material-ui/icons/LinkedIn";
const About = () => {
  const visitLinkedIn = () => {
    window.location = "https://www.linkedin.com/in/divyansh-soni-786571213/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://media-exp2.licdn.com/dms/image/C4E03AQH3yYN9Tbehyw/profile-displayphoto-shrink_800_800/0/1648748386885?e=1661990400&v=beta&t=4k2GtI94CmnmBZYNtCvQ1y--uJmFUobBiW4xIHU-mr8"
              alt="Founder"
            />
            <Typography>Divyansh Soni</Typography>
            <Button onClick={visitLinkedIn}  color="primary">
              Visit LinkedIn
            </Button>
            <span>
              This is a sample wesbite made by Divyansh Soni. Only with the
              purpose of developing something useful.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">About Me</Typography>

            <a
              href="https://www.linkedin.com/in/divyansh-soni-786571213/"
              target="blank"
            >
              <LinkedInIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
