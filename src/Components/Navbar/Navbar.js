import React, { useState } from "react";
import "./Navbar.css";
import icon from "../Assets/icon.png";
import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

const [navbar,setNavbar] = useState(0);

  const navigate = useNavigate();
  return (
    <>
    {
navbar === 0?(
    <button onClick={(e)=>setNavbar(1)} >ThreeDots</button>
    ):(<button onClick={(e)=>setNavbar(0)}>CloseNav</button>)}
    { 
      navbar? ( 
    <div className="navbar">
      <div className="navbar__left">
        <Button onClick={() => navigate("/Home")}>Sheerina Enterprise</Button>
      </div>
      <div className="navbar__middle">
        <Button onClick={() => navigate("/Contact")}>Contact</Button>
      </div>
      <div className="navbar__right">
        <Avatar />
      </div>
    </div>
   ):(<></>) }
   </>
  );
};

export default Navbar;
