/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import "./AboutUs.css";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div>
      <h1 className="subtitle-about-us">About Us</h1>
      <div className="about-us-container">
        <div className="text-container">
          <p>
            Welcome to The Nobel Prize, a website dedicated to celebrating the
            achievements of the latest Nobel Prize winners. We believe that the
            world needs to know about the remarkable contributions of these
            Nobel laureates, and our website serves as a hub for anyone
            interested in learning more about their research and discoveries. We
            are committed to providing accurate and up-to-date information about
            their work, and we hope to inspire the next generation of
            scientists, writers, and peace activists. We are excited to share
            our project with you and invite you to explore the profiles of the
            latest Nobel Prize winners on our website. Thank you for visiting
            The Nobels.
          </p>
        </div>
        <h1 className="team-subtitle">The Team</h1>
        <div className="team-container">
          <div className="member-card">
            <img
              className="team-picture"
              src="https://media.licdn.com/dms/image/D5603AQE18uOf1sNnpQ/profile-displayphoto-shrink_800_800/0/1670541950973?e=1686182400&v=beta&t=Dq65u4jSNaSlLHYfVywISZTtdIk2nvXdDf2at18xph0"
              alt="Duarte"
              width="50%"
            />
            <h2>Duarte Jorge</h2>

            <div className="icon-container">
              <Link
                to="https://www.linkedin.com/in/duarte-de-almeida-jorge-b37b5469/"
                target="_blank"
              >
                <img
                  className="linkedin-logo2"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ1tR5ualXXIjo6jTZQDaEnQPCFDFDXqJ6yxm2ppU&s"
                  alt="linkedin-icon"
                  width="5%"
                />
              </Link>
              <Link
                to="https://github.com/Nobel-Guys/Nobel-Guys"
                target="_blank"
              >
                <img
                  className="github-logo2"
                  src="https://w7.pngwing.com/pngs/914/758/png-transparent-github-social-media-computer-icons-logo-android-github-logo-computer-wallpaper-banner-thumbnail.png"
                  alt="github logo"
                  width="5%"
                />
              </Link>
            </div>
          </div>
          <div className="member-card">
            <img
              className="team-picture"
              src="https://media.licdn.com/dms/image/C4E03AQFCnDweij5KKg/profile-displayphoto-shrink_800_800/0/1541781393845?e=1686182400&v=beta&t=oXPe4b3SpxYwwpF2MOaF4R5T2BVRgSevbxnw99e8TNQ"
              alt="Nuno"
              width="50%"
            />
            <h2>Nuno Colaço</h2>

            <div className="icon-container">
              <Link
                to="https://github.com/Nobel-Guys/Nobel-Guys"
                target="_blank"
              >
                <img
                  className="linkedin-logo2"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ1tR5ualXXIjo6jTZQDaEnQPCFDFDXqJ6yxm2ppU&s"
                  alt="linkedin-icon"
                  width="5%"
                />
              </Link>
              <Link
                to="https://github.com/Nobel-Guys/Nobel-Guys"
                target="_blank"
              >
                <img
                  className="github-logo2"
                  src="https://w7.pngwing.com/pngs/914/758/png-transparent-github-social-media-computer-icons-logo-android-github-logo-computer-wallpaper-banner-thumbnail.png"
                  alt="github logo"
                  width="5%"
                />
              </Link>
            </div>
          </div>
          <div className="member-card">
            <img
              className="team-picture"
              src="https://media.licdn.com/dms/image/D4D03AQHUPVUw3ilx3Q/profile-displayphoto-shrink_400_400/0/1671643409499?e=1686182400&v=beta&t=UgW3g4XkUQk-QzD_lTJ_bS8NnF9aRRY7z_pTl4IUsh0"
              alt="Ricardo"
              width="50%"
            />
            <h2>Ricardo Correia</h2>

            <div className="icon-container">
              <Link
                to="https://github.com/Nobel-Guys/Nobel-Guys"
                target="_blank"
              >
                <img
                  className="linkedin-logo2"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ1tR5ualXXIjo6jTZQDaEnQPCFDFDXqJ6yxm2ppU&s"
                  alt="linkedin-icon"
                  width="5%"
                />
              </Link>
              <Link
                to="https://github.com/Nobel-Guys/Nobel-Guys"
                target="_blank"
              >
                <img
                  className="github-logo2"
                  src="https://w7.pngwing.com/pngs/914/758/png-transparent-github-social-media-computer-icons-logo-android-github-logo-computer-wallpaper-banner-thumbnail.png"
                  alt="github logo"
                  width="5%"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
