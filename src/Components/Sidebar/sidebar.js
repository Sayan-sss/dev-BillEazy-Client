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
            background: "#161120",
          }}
        >
          <Button
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // position: "absolute",
              color: "gray",
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
            <Tooltip title="Invoice">
              <IconButton
                onClick={() => navigate("/Invoicegenerator")}
                sx={{
                  backgroundColor: "gray",
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
                  backgroundColor: "gray",
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
                  backgroundColor: "gray",
                  color: "white",
                }}
              >
                <EventNoteIcon />
              </IconButton>
            </Tooltip>
          </Box>
          {user ? (
            <Tooltip title="Log Out">
              <IconButton
                onClick={handlelogOut}
                variant="contained"
                sx={{
                  backgroundColor: "gray",
                  color: "white",
                  display: "flex",
                  // alignItems: "flex-end",
                  marginTop: "14rem",
                }}
              >
                <LogoutIcon />
              </IconButton>
            </Tooltip>
          ) : (
            <></>
          )}
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
            background: "#161120",
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
              // border: "1px solid red",
              width: "15vw",
              // alignItems: "center",
              // justifyContent: "center",
              // position: "absolute",
              marginTop: "-2rem",
              color: "gray",
            }}
            className="menuCloseBtn btn"
            onClick={(e) => setSidebar(0)}
          >
            <MenuOpenIcon fontSize="large" />
          </Button>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "15vw",
              height: "80vh",
              marginTop: "2rem",
              // border: "1px solid blue",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // border: "2px solid red",
                width: "15vw",
              }}
            >
              <Button
                variant="contained"
                color="success"
                onClick={() => navigate("/medicines")}
              >
                Company Logo
              </Button>
            </Box>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "12vw",
                  // border: "1px solid white",
                  justifyContent: "space-around",
                  marginTop: "2rem",
                  height: "50vh",
                }}
              >
                <Button
                  onClick={() => navigate("/Invoicegenerator")}
                  sx={{
                    backgroundColor: "#0d0424",
                    border: "1px solid blue",
                    color: "white",
                    justifyContent: "space-evenly",
                  }}
                >
                  <ReceiptIcon />
                  Invoice
                </Button>

                <Button
                  onClick={() => navigate("/Invoicegenerator")}
                  // variant="contained"
                  color="primary"
                  sx={{
                    backgroundColor: "#0d0424",
                    border: "1px solid blue",
                    color: "white",
                    justifyContent: "space-evenly",
                  }}
                >
                  <DescriptionIcon />
                  Proforma
                </Button>
                <Button
                  onClick={() => navigate("/Invoicegenerator")}
                  // variant="contained"
                  color="primary"
                  sx={{
                    backgroundColor: "#0d0424",
                    border: "1px solid blue",
                    color: "white",
                    justifyContent: "space-evenly",
                  }}
                >
                  <EventNoteIcon />
                  Challan
                </Button>
              </Box>
            </Box>
          </Box>
          {user ? (
            <Button
              sx={{
                backgroundColor: "#0d0424",
                border: "1px solid blue",
                display: "flex",
                // width: "15vw",
                // marginBottom: "-5rem",
                color: "white",
                justifyContent: "center",
                alignItems: "flex-end",
                border: "1px solid red",
              }}
              onClick={handlelogOut}
            >
              Log Out
            </Button>
          ) : (
            <></>
          )}
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};

export default Sidebar;
