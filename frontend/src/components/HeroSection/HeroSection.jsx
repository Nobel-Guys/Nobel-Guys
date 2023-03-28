import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div>
      <img
        className="hero-image"
        src="https://news.columbia.edu/sites/default/files/styles/cu_crop/public/content/2022/nobel-prize-medal-2.jpg?itok=6WkTd0wD"
        alt="nobel hero"
      />

      <h2 className="subtitle">Previous Winners</h2>
      <img
        className="alain-aspect"
        src="https://opoyi.com/wp-content/uploads/2023/01/alain-aspect-9516d9f2-4278-42c1-8540-e9c86f6ef5b-resize-750_F5MN2C_u2.jpeg"
        alt="alain aspect"
        width="35%"
      />
    </div>
  );
}

export default HeroSection;
