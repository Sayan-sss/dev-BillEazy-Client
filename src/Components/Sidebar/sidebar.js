import React, { useState } from "react";
// import "./Navbar.css";
import { Box, Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import InsideMedicineContainer from "../Medicine/InsideMedicineContainer";

const SideBar = () => {
  const [navbar, setNavbar] = useState(1);

  const navigate = useNavigate();
  return (
    <Paper
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100%",
        backgroundColor: "#FFFFFF",
        border: "1px solid black",

        // backgroundColor: "rgb(214,214,214)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          // border: "1px solid black",
          height: "100vh",
        }}
      >
        <img
          onClick={() => navigate("/")}
          src={logo}
          style={{
            // marginLeft: "4.5rem",
            height: "10rem",
            width: "10rem",
            cursor: "pointer",
          }}
          alt=""
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            // border: "1px solid black",
            height: "90vh",
            // margin: "2rem",
            // alignItems: "center",
          }}
        >
          <Button
            onClick={() => navigate("/Invoicegenerator")}
            variant="contained"
            color="primary"
          >
            Invoice
          </Button>
          <Button
            onClick={() => navigate("/Invoicegenerator")}
            variant="contained"
            color="primary"
          >
            Challan
          </Button>
          <Button
            onClick={() => navigate("/Invoicegenerator")}
            variant="contained"
            color="primary"
          >
            Proforma
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default SideBar;
