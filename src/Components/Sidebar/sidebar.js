import React, { useState } from "react";
import "./Navbar.css";
import { Box, Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import icon from "../Assets/icon.png";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import InsideMedicineContainer from "../Medicine/InsideMedicineContainer";

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
        backgroundColor: "white",
      }}
    >
      <img
        onClick={() => navigate("/")}
        src={icon}
        style={{
          marginLeft: "4.5rem",
          height: "10rem",
          width: "10rem",
          cursor: "pointer",
        }}
        alt=""
      />
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box>
          <Button
            onClick={() => navigate("/Invoicegenerator")}
            variant="contained"
            color="primary"
          >
            Invoice
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
