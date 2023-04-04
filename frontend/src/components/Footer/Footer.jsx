/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div className="ul-container">
        <div className="footer-ul">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <div className="footer-list">Home</div>
          </Link>
          <Link
            to="/notablewinners"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="footer-list">Notable Winners</div>
          </Link>
          <Link
            to="/AboutUs"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="footer-list">About Us</div>
          </Link>
          <div className="icon-container2">
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
        </div>
      </div>
      <div className="copyright">&copy; 2023 The Nobel Guys</div>
    </div>
  );
}

export default Footer;
