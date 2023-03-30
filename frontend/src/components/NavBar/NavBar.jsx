/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from "react";
import "./NavBar.css";

function NavBar() {
  const [burgerClass, setBurgerClass] = useState("bar unclicked");

  const [menuClass, setMenuClass] = useState("menu hidden");

  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  //   const clickOnLink = () => {
  //     setBurgerClass("bar unclicked");
  //     setMenuClass("menu hidden");
  //   };

  return (
    <div className="nav-container">
      <div>
        <nav>
          <div className="burger-menu" onClick={updateMenu}>
            <div className={burgerClass} />
            <div className={burgerClass} />
            <div className={burgerClass} />
          </div>
        </nav>
        <div className={menuClass}>
          <ul>
            <br />
            <br />
            <li>Info</li>
            <li>Curiosities</li>
            <li>Past Winners</li>
          </ul>
        </div>
      </div>
      <div className="logo-container">
        <div className="logo">
          <img
            className="logo-picture"
            src="https://images.ctfassets.net/eqlypemzu8y5/7jcRtl2ykLzTjejTQH8uqr/fa292df0bda2de1e9afdaabe16955901/Nobel_Logo_Dark.png"
            alt="logo"
            height="50px"
          />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
