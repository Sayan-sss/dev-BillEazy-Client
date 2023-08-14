import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useNavigate } from "react-router-dom";
import AboutCard from "./About.Card";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

const About = () => {
  const navigate = useNavigate();
  return (
    <Box
      classname="main"
      sx={{
        height: "100vh",
        width: "85vw",
        display: "flex",
        flexDirection: "column",
        border: "1px solid red",
      }}
    >
      <Box classname="header" sx={{ height: "10vh", width: "85vw" }}></Box>

      <Box sx={{ height: "50vh", width: "85vw" }}>
        <Divider sx={{}}>
          <Chip
            sx={{
              background: "#073259",
              color: "white",
              height: "5vh",
              width: "20vw",
              fontSize: "1rem",
            }}
            label="OUR SERVICES"
          />
        </Divider>

        <Box
          classname="body"
          sx={{
            height: "40vh",
            width: "85vw",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <AboutCard />
          <AboutCard />
          <AboutCard />
        </Box>
      </Box>
      <Box>
        <Divider>
          <Chip
            sx={{
              background: "#073259",
              color: "white",
              height: "5vh",
              width: "40vw",
              fontSize: "1rem",
              // marginBottom: "1rem",
            }}
            label="FOR ANY QUARIES PLEASE CONTACT US"
          />
        </Divider>
        <Box
          classname="footer"
          sx={{
            display: "flex",
            flexDirection: "row",
            height: "39vh",
            justifyContent: "space-evenly",
            marginTop: "1rem",
            width: "85vw",
            // border: "1px solid #073259",
          }}
        >
          <Box classname="footer_left" sx={{ height: "100vh", width: "30vw" }}>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  // border: "1px solid blue",

                  flexDirection: "column",
                  height: "20vh",
                  width: "30vw",
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: " space-around",
                    alignItems: "center",
                    color: "#073259",
                  }}
                >
                  <LocationOnIcon
                    sx={{ color: "#073259", marginRight: "1rem" }}
                  />
                  Berhampore, Murshidabad
                </Typography>

                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: " space-around",
                    alignItems: "center",
                    color: "#073259",
                  }}
                >
                  <EmailIcon sx={{ color: "#073259", marginRight: "1rem" }} />
                  virus@gmail.com
                </Typography>

                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    color: "#073259",
                  }}
                >
                  <PhoneIcon sx={{ color: "#073259", marginRight: "1rem" }} />
                  7797004695
                </Typography>
              </Box>
              <Box
                sx={{
                  // border: "1px solid black",
                  height: "10vh",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <IconButton
                  onClick={() => navigate("/Invoicegenerator")}
                  variant="contained"
                  sx={{
                    backgroundColor: "#073259",
                    color: "gray",
                  }}
                >
                  <FacebookIcon fontSize="large"></FacebookIcon>
                </IconButton>

                <IconButton
                  onClick={() => navigate("/Invoicegenerator")}
                  variant="contained"
                  sx={{
                    backgroundColor: "#073259",
                    color: "gray",
                  }}
                >
                  <LinkedInIcon fontSize="large"></LinkedInIcon>
                </IconButton>

                <IconButton
                  onClick={() => navigate("/Invoicegenerator")}
                  variant="contained"
                  sx={{
                    backgroundColor: "#073259",
                    color: "gray",
                  }}
                >
                  <GitHubIcon fontSize="large"></GitHubIcon>
                </IconButton>

                <IconButton
                  onClick={() => navigate("/Invoicegenerator")}
                  variant="contained"
                  sx={{
                    backgroundColor: "#073259",
                    color: "gray",
                  }}
                >
                  <InstagramIcon fontSize="large"></InstagramIcon>
                </IconButton>
              </Box>
            </Box>
          </Box>

          <Box
            classname="footer_right"
            sx={{ height: "100vh", width: "45vw", border: "1px solid red" }}
          >
            <Divider textAlign="right">RIGHT</Divider>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
