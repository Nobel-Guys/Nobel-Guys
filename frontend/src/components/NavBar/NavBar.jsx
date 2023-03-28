/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from "react";
import "./NavBar.css";

function NavBar() {
  const [open, setOpen] = useState(false);

  const handleBurgerClick = () => {
    setOpen(!open);
  };

  return (
    <div className="nav-bar">
      <img
        className="logo"
        src="https://images.ctfassets.net/eqlypemzu8y5/7jcRtl2ykLzTjejTQH8uqr/fa292df0bda2de1e9afdaabe16955901/Nobel_Logo_Dark.png"
        alt="logo"
        height="50px"
      />
      <nav>
        <div className="burger-menu">
          <button
            type="button"
            className={open ? "hidden" : "open"}
            onClick={handleBurgerClick}
          />
          {open && (
            <div className="links">
              {/* <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Contact</a> */}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
