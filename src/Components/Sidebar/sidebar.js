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
import Box from "@mui/material/Box";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(0);

  const navigate = useNavigate();
  return (
    <>
      {sidebar === 0 ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // justifyContent: "center",
            border: "1px solid blue",
            width: "5vw",
            height: "100vh",
          }}
        >
          <Button
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // position: "absolute",
            }}
            className="menuOpenBtn btn"
            onClick={(e) => setSidebar(1)}
          >
            <MenuIcon />
          </Button>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              // paddingTop: ".2rem",
              // justifyContent: "space-evenly",
            }}
          >
            <Button
              onClick={() => navigate("/Invoicegenerator")}
              variant="contained"
            >
              <ReceiptIcon />
            </Button>
            <Button
              onClick={() => navigate("/Invoicegenerator")}
              variant="contained"
            >
              <DescriptionIcon />
            </Button>
            <Button
              onClick={() => navigate("/Invoicegenerator")}
              variant="contained"
            >
              <EventNoteIcon />
            </Button>
          </Box>
        </Box>
      ) : (
        <Button
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            position: "absolute",
            // left: "7rem",
            // top: "2rem",
          }}
          className="menuCloseBtn btn"
          onClick={(e) => setSidebar(0)}
        >
          <MenuOpenIcon />
        </Button>
      )}
      {sidebar ? (
        <Box
          sx={{
            position: "absolute",
            // left: 2,
            // bottom: "2rem",
            width: "20vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid red",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "20vw",
              marginTop: "5rem",
              border: "1px solid black",
              // alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // border: "2px solid red",
                width: "20vw",
              }}
            >
              <Button
                variant="contained"
                color="success"
                onClick={() => navigate("/")}
              >
                Sheerina Enterprise
              </Button>
            </Box>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "10vw",
                  // border: "1px solid black",
                  // justifyContent: "space-between",
                  marginTop: "5rem",
                  height: "50vh",
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
          </Box>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};

export default Sidebar;
