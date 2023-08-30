import { Box, Button, Container, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Invoice from "../Assets/Invoice.png";
import logo from "../Assets/newlogo.png";
import React from "react";
import { useNavigate } from "react-router-dom";
import AboutCard from "../About/About.Card";
import About from "../About/About";
import Contact from "../Contact/Contact";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        flexDirection: "column",
        overflow: "scroll",
        // overflow: "hidden",
        // border: "1px solid red",
        height: "100vh",
        width: "100vw ",
        color: "#073259",
      }}
    >
      {/* <Container
        sx={{ height: "100%", width: "100%", border: "1px solid red" }}
      > */}
      <Box
        sx={{
          borderRadius: "10px ",
          background: "#D7E8EA",
          border: "10px solid red",
          border: "1px solid #073259",
          height: "95%",
          width: "95%",
        }}
      >
        <Box
          sx={{
            // border: "1px solid red",
            height: "20%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: "15%",
              display: "flex",
              alignItems: "center",
              // cursor: "pointer",
              //   justifyContent: "center",
            }}
          >
            <img src={logo} alt="" height={"60%"} />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              flexDirection: "row",
              // border: "1px solid blue",
              height: "100%",
              width: "50%",
            }}
          >
            <Typography
              gutterBottom
              sx={{ fontWeight: "bold", cursor: "pointer" }}
              onClick={() => navigate("/Pricing")}
            >
              SUBSCRIPTION
            </Typography>
            <Typography
              gutterBottom
              sx={{ fontWeight: "bold", cursor: "pointer" }}
              onClick={() => navigate("/About")}
            >
              ABOUT US
            </Typography>
            <Typography
              gutterBottom
              sx={{ fontWeight: "bold", cursor: "pointer" }}
              onClick={() => navigate("/About")}
            >
              CONTACT US
            </Typography>
          </Box>
          <Box
            sx={{
              // border: "1px solid blue",
              height: "100%",
              width: "35%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Button
              sx={{ background: "#073259" }}
              variant="contained"
              onClick={() => navigate("/Login")}
            >
              Sign In
            </Button>
            <Button
              sx={{
                color: "#073259",
                marginLeft: "1rem",
                marginRight: "1rem",
              }}
              variant="outlined"
              onClick={() => navigate("/SignUp")}
            >
              Try It Free
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            // border: "1px solid blue",
            flexDirection: "column",
            height: "80%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h2"
            // gutterBottom
            sx={{
              height: "30%",
              //   border: "1px solid black",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Manage Invoices and Payments
          </Typography>
          <Typography
            variant="h2"
            color="#8299A"
            gutterBottom
            sx={{
              height: "30%",
              //   border: "1px solid black",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "blue",
            }}
          >
            Your Business Digitally
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              height: "10%",
              width: "100%",
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CheckCircleIcon sx={{ marginRight: "1rem" }} />
              Automate Transactions
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CheckCircleIcon sx={{ marginRight: "1rem" }} />
              Control Payment Tempo
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CheckCircleIcon sx={{ marginRight: "1rem" }} />
              Track Business Payment
            </Typography>
          </Box>
          <Box
            sx={{
              // border: "1px solid blue",
              height: "60%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={Invoice} alt="" height={"95%"} width={"50%"} />
          </Box>
        </Box>
        {/* <Contact /> */}
      </Box>
      {/* next page */}
      {/* <Box sx={{ border: "1px solid red", height: "100%", width: "100%" }}>
        <Box>
          <About />
        </Box>
      </Box> */}
    </Box>
  );
};

export default LandingPage;
