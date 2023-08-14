import React, { useState } from "react";
// import "./Navbar.css";
import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import EventNoteIcon from "@mui/icons-material/EventNote";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import ReceiptIcon from "@mui/icons-material/Receipt";
import DescriptionIcon from "@mui/icons-material/Description";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InfoIcon from "@mui/icons-material/Info";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(0);
  const user = localStorage.getItem("user");
  const navigate = useNavigate();
  const handlelogOut = () => {
    localStorage.removeItem("user", "token");

    navigate("/Login");
  };
  return (
    <>
      {sidebar === 0 ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // justifyContent: "center",
            // border: "1px solid blue",
            width: "5vw",
            height: "100vh",
            background: "#062541",
          }}
        >
          <Button
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // position: "absolute",
              color: "white",
            }}
            className="menuOpenBtn btn"
            onClick={(e) => setSidebar(1)}
          >
            <DoubleArrowIcon fontSize="large" />
          </Button>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              // border: "1px solid red",
              paddingTop: "2rem",
              height: "50vh",
              justifyContent: "space-evenly",
            }}
          >
            <Tooltip title="Home">
              <IconButton
                onClick={() => navigate("/medicines")}
                sx={{
                  backgroundColor: "#073259",
                  color: "white",
                }}
              >
                <HomeIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Invoice">
              <IconButton
                onClick={() => navigate("/Invoicegenerator")}
                sx={{
                  backgroundColor: "#073259",
                  color: "white",
                }}
              >
                <ReceiptIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Proforma Invoice">
              <IconButton
                onClick={() => navigate("/Invoicegenerator")}
                variant="contained"
                sx={{
                  backgroundColor: "#073259",
                  color: "white",
                }}
              >
                <DescriptionIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delivery Challan">
              <IconButton
                onClick={() => navigate("/Invoicegenerator")}
                variant="contained"
                sx={{
                  backgroundColor: "#073259",
                  color: "white",
                }}
              >
                <EventNoteIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Account">
              <IconButton
                onClick={() => navigate("/Invoicegenerator")}
                variant="contained"
                sx={{
                  backgroundColor: "#073259",
                  color: "white",
                }}
              >
                <AccountCircleIcon />
              </IconButton>
            </Tooltip>
          </Box>
          <Box
            sx={{
              height: "35vh",
              // border: "2px solid red",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <Tooltip title="About Us">
              <IconButton
                onClick={() => navigate("/About")}
                variant="contained"
                sx={{
                  display: "flex",
                  marginTop: "5rem",
                  backgroundColor: "#073259",
                  color: "white",
                }}
              >
                <InfoIcon />
              </IconButton>
            </Tooltip>

            {user ? (
              <Tooltip title="Log Out">
                <IconButton
                  onClick={handlelogOut}
                  variant="contained"
                  sx={{
                    backgroundColor: "#073259",
                    color: "white",
                    display: "flex",
                    // alignItems: "flex-end",
                    marginTop: "1rem",
                  }}
                >
                  <LogoutIcon />
                </IconButton>
              </Tooltip>
            ) : (
              <></>
            )}
          </Box>
        </Box>
      ) : (
        <Box>
          {/* <Button
            variant="contained"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              position: "absolute",
            }}
            className="menuCloseBtn btn"
            onClick={(e) => setSidebar(0)}
          >
            <MenuOpenIcon />
          </Button> */}
        </Box>
      )}
      {sidebar ? (
        <Box
          sx={{
            position: "absolute",
            // left: 2,
            // bottom: "2rem",
            background: "#062541",
            width: "15vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            // border: "1px solid blue",
          }}
        >
          <Button
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              width: "15vw",
              marginTop: "-2rem",
              color: "white",
            }}
            className="menuCloseBtn btn"
            onClick={(e) => setSidebar(0)}
          >
            <MenuOpenIcon fontSize="large" />
          </Button>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              width: "15vw",
              // border: "1px solid red",
              paddingTop: "2rem",
              height: "50vh",
              justifyContent: "space-evenly",
            }}
          >
            <Button
              onClick={() => navigate("/medicines")}
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "15vw",
                alignItems: "center",
                justifyContent: "flex-start",
                backgroundColor: "#073259",
                color: "white",
              }}
            >
              <HomeIcon sx={{ marginLeft: "1rem", marginRight: "1rem" }} />
              Home
            </Button>

            <Button
              onClick={() => navigate("/Invoicegenerator")}
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "15vw",
                alignItems: "center",
                justifyContent: "flex-start",
                backgroundColor: "#073259",
                color: "white",
              }}
            >
              <ReceiptIcon sx={{ marginLeft: "1rem", marginRight: "1rem" }} />
              Invoice
            </Button>

            <Button
              onClick={() => navigate("/Invoicegenerator")}
              // variant="contained"
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "15vw",
                alignItems: "center",
                justifyContent: "flex-start",
                backgroundColor: "#073259",
                color: "white",
              }}
            >
              <DescriptionIcon
                sx={{ marginLeft: "1rem", marginRight: "1rem" }}
              />
              Proforma Invoice
            </Button>

            <Button
              onClick={() => navigate("/Invoicegenerator")}
              // variant="contained"
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "15vw",
                alignItems: "center",
                justifyContent: "flex-start",
                backgroundColor: "#073259",
                color: "white",
              }}
            >
              <EventNoteIcon sx={{ marginLeft: "1rem", marginRight: "1rem" }} />
              Delivery Challan
            </Button>

            <Button
              onClick={() => navigate("/Invoicegenerator")}
              // variant="contained"
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "15vw",
                alignItems: "center",
                justifyContent: "flex-start",
                backgroundColor: "#073259",
                color: "white",
              }}
            >
              <AccountCircleIcon
                sx={{ marginLeft: "1rem", marginRight: "1rem" }}
              />
              Account
            </Button>
          </Box>
          <Box
            sx={{
              height: "35vh",
              // border: "2px solid red",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <Button
              onClick={() => navigate("/About")}
              // variant="contained"
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "15vw",
                alignItems: "center",
                justifyContent: "flex-start",
                backgroundColor: "#073259",
                color: "white",
              }}
            >
              <InfoIcon sx={{ marginLeft: "1rem", marginRight: "1rem" }} />
              About Us
            </Button>

            {user ? (
              <Button
                onClick={handlelogOut}
                // variant="contained"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "15vw",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  backgroundColor: "#073259",
                  color: "white",
                }}
              >
                <LogoutIcon sx={{ marginLeft: "1rem", marginRight: "1rem" }} />
                Log Out
              </Button>
            ) : (
              <></>
            )}
          </Box>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};

export default Sidebar;
