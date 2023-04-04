/* eslint-disable no-restricted-globals */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  const [burgerClass, setBurgerClass] = useState("bar unclicked");

  const [menuClass, setMenuClass] = useState("menu hidden");

  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("bar clicked");
      setMenuClass("menu visible");
      // document.body.classList.add("no-scroll"); add no-scroll
    } else {
      setBurgerClass("bar unclicked");
      setMenuClass("menu hidden");
      // document.body.classList.remove("no-scroll"); remove no-scroll
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const closeMenu = () => {
    setBurgerClass("bar unclicked");
    setMenuClass("menu hidden");
    document.body.style.overflow = "auto";
    setIsMenuClicked(false);
  };

  // useEffect(() => {
  //   const unlisten = history.listen(() => {
  //     closeMenu();
  //   });
  //   return () => {
  //     unlisten();
  //   };
  // }, [history]);

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
          <ul className="nav-ul">
            <br />
            <br />
            <Link
              to="/"
              onClick={closeMenu}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <li className="nav-list">Home</li>
            </Link>
            <Link
              onClick={closeMenu}
              to="/notablewinners"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <li className="nav-list">Notable Winners</li>
            </Link>
            <Link
              onClick={closeMenu}
              to="/AboutUs"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <li className="nav-list">About Us</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="logo">
        <img
          className="logo-picture"
          src="https://images.ctfassets.net/eqlypemzu8y5/7jcRtl2ykLzTjejTQH8uqr/fa292df0bda2de1e9afdaabe16955901/Nobel_Logo_Dark.png"
          alt="logo"
          height="50px"
        />
      </div>
    </div>
  );
}

export default NavBar;
