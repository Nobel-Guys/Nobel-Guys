/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import "./Medals.css";
import { Link } from "react-router-dom";

function Medals() {
  return (
    <div className="background-color-medals">
      <h1 className="subtitle3">Categories</h1>
      <div className="medal-column">
        <Link
          to="/categories"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img
            className="medal"
            src="https://c1.wallpaperflare.com/preview/611/66/470/nobel-prize-nobel-award-prize-giving-ceremony.jpg"
            alt="medal"
            width="50%"
          />
        </Link>
        <h2 className="medal-subtitle">Physics</h2>

        <Link
          to="/chemistry"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img
            className="medal"
            src="https://c1.wallpaperflare.com/preview/611/66/470/nobel-prize-nobel-award-prize-giving-ceremony.jpg"
            alt="medal"
            width="50%"
          />
        </Link>
        <h2 className="medal-subtitle">Medicine</h2>
        <Link
          to="/chemistry"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img
            className="medal"
            src="https://c1.wallpaperflare.com/preview/611/66/470/nobel-prize-nobel-award-prize-giving-ceremony.jpg"
            alt="medal"
            width="50%"
          />
        </Link>
        <h2 className="medal-subtitle">Literature</h2>

        <Link
          to="/chemistry"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img
            className="medal"
            src="https://c1.wallpaperflare.com/preview/611/66/470/nobel-prize-nobel-award-prize-giving-ceremony.jpg"
            alt="medal"
            width="50%"
          />
        </Link>
        <h2 className="medal-subtitle">Chemistry</h2>
        <Link
          to="/chemistry"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img
            className="medal"
            src="https://c1.wallpaperflare.com/preview/611/66/470/nobel-prize-nobel-award-prize-giving-ceremony.jpg"
            alt="medal"
            width="50%"
          />
        </Link>

        <h2 className="medal-subtitle">Economic Sciences</h2>

        <Link
          to="/chemistry"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img
            className="medal"
            src="https://c1.wallpaperflare.com/preview/611/66/470/nobel-prize-nobel-award-prize-giving-ceremony.jpg"
            alt="medal"
            width="50%"
          />
        </Link>

        <h2 className="medal-subtitle">Peace</h2>
      </div>
    </div>
  );
}

export default Medals;
