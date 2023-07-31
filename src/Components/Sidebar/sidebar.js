import React, { useState } from "react";
import "./Navbar.css";
import { Box, Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

const SideBar = () => {
  const [navbar, setNavbar] = useState(1);

  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "20vw",
        backgroundColor: "red",
      }}
    >
      Hellos
    </Box>
  );
};

export default SideBar;
