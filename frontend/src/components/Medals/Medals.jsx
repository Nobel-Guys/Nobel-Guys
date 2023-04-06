/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import "./Medals.css";
import { Link } from "react-router-dom";

function Medals() {
  return (
    <div className="background-color-medals">
      <h1 className="subtitle3">Categories</h1>

      <div className="medal-column">
        <div className="medal-card">
          <Link
            to="/categories/phy"
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
        </div>
        <div className="medal-card">
          <Link
            to="/categories/med"
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
        </div>
        <div className="medal-card">
          <Link
            to="/categories/lit"
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
        </div>

        <div className="medal-layout">
          <div className="medal-card">
            <Link
              to="/categories/che"
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
          </div>
          <div className="medal-card">
            <Link
              to="/categories/eco"
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
          </div>
          <div className="medal-card">
            <Link
              to="/categories/pea"
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
      </div>
    </div>
  );
}

export default Medals;
