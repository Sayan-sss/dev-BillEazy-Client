import React, { useState } from "react";
import "./Navbar.css";
import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

const Navbar = () => {
  const [navbar, setNavbar] = useState(0);

  const navigate = useNavigate();
  return (
    <>
      {navbar === 0 ? (
        <Button
          sx={{ position: "absolute", zIndex: "200" }}
          className="menuOpenBtn btn"
          onClick={(e) => setNavbar(1)}
        >
          <MenuIcon />
          Menu
        </Button>
      ) : (
        <Button
          sx={{ position: "absolute", zIndex: "200", marginLeft: "12rem" }}
          className="menuCloseBtn btn"
          onClick={(e) => setNavbar(0)}
        >
          <MenuOpenIcon />
        </Button>
      )}
      {navbar ? (
        <div className="navbar">
          <div className="navbar__left">
            <Button onClick={() => navigate("/Home")}>
              Sheerina Enterprise
            </Button>
          </div>
          <div className="navbar__middle">
            <Button onClick={() => navigate("/Contact")}>Contact</Button>
            <Button onClick={() => navigate("/addinvoice")}>Invoice</Button>
          </div>
          <div className="navbar__right">
            <Avatar />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Navbar;
