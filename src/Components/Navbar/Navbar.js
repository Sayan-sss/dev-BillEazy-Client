import React from "react";
import "./Navbar.css";
import Avatar from "./Avatar";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <h3 className="navbar__title">sheerina enterprise</h3>
      </div>
      <div className="navbar__middle"></div>
      <div className="navbar__right">
        <Avatar className="avatar" />
      </div>
    </div>
  );
};

export default Navbar;
