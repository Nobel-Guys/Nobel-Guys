import React from "react";
import "./AboutUs.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

function AboutUs() {
  return (
    <div>
      <NavBar />
      <h1 className="subtitle-about-us">About Us</h1>
      <div className="about-us-container">
        <div className="text-container">
          <p>
            Welcome to The Nobels, a website dedicated to celebrating the
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
          <img
            src="https://media.licdn.com/dms/image/D5603AQE18uOf1sNnpQ/profile-displayphoto-shrink_800_800/0/1670541950973?e=1686182400&v=beta&t=Dq65u4jSNaSlLHYfVywISZTtdIk2nvXdDf2at18xph0"
            alt="Duarte"
            width="50%"
          />
          <h3 className="team-subtitle">Duarte Jorge</h3>
          <div className="icon-container">
            <img
              className="linkedin-logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ1tR5ualXXIjo6jTZQDaEnQPCFDFDXqJ6yxm2ppU&s"
              alt="linkedin-icon"
              width="5%"
            />
            <img
              className="github-logo"
              src="https://w7.pngwing.com/pngs/914/758/png-transparent-github-social-media-computer-icons-logo-android-github-logo-computer-wallpaper-banner-thumbnail.png"
              alt="github logo"
              width="5%"
            />
          </div>
          <img
            src="https://media.licdn.com/dms/image/C4E03AQFCnDweij5KKg/profile-displayphoto-shrink_800_800/0/1541781393845?e=1686182400&v=beta&t=oXPe4b3SpxYwwpF2MOaF4R5T2BVRgSevbxnw99e8TNQ"
            alt="Nuno"
            width="50%"
          />
          <h3 className="team-subtitle">Nuno Colaço</h3>
          <div className="icon-container">
            <img
              className="linkedin-logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ1tR5ualXXIjo6jTZQDaEnQPCFDFDXqJ6yxm2ppU&s"
              alt="linkedin-icon"
              width="5%"
            />
            <img
              className="github-logo"
              src="https://w7.pngwing.com/pngs/914/758/png-transparent-github-social-media-computer-icons-logo-android-github-logo-computer-wallpaper-banner-thumbnail.png"
              alt="github logo"
              width="5%"
            />
          </div>

          <img
            src="https://media.licdn.com/dms/image/D4D03AQHUPVUw3ilx3Q/profile-displayphoto-shrink_400_400/0/1671643409499?e=1686182400&v=beta&t=UgW3g4XkUQk-QzD_lTJ_bS8NnF9aRRY7z_pTl4IUsh0"
            alt="Ricardo"
            width="50%"
          />
          <h3>Ricardo Pereira</h3>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
