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
          <div className="nav-ul">
            <br />
            <br />
            <Link
              to="/"
              onClick={closeMenu}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="nav-list">Home</div>
            </Link>
            <Link
              onClick={closeMenu}
              to="/notable-winners"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="nav-list">Notable Winners</div>
            </Link>
            <Link
              onClick={closeMenu}
              to="/about-us"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="nav-list">About Us</div>
            </Link>
          </div>
        </div>
        {/* <div className="nav-bar-desktop">
          <Link to="/">
            <div className="nav-list">Home</div>
          </Link>
          <Link to="/notable-winners">
            <div className="nav-list">Notable Winners</div>
          </Link>
          <Link to="/about-us">
            <li className="nav-list">About Us</li>
          </Link>
        </div> */}
      </div>
      <Link to="/">
        <div className="logo" id="logo">
          <img
            className="logo-picture"
            src="https://images.ctfassets.net/eqlypemzu8y5/7jcRtl2ykLzTjejTQH8uqr/fa292df0bda2de1e9afdaabe16955901/Nobel_Logo_Dark.png"
            alt="logo"
            height="50px"
          />
        </div>
      </Link>
    </div>
  );
}

export default NavBar;
