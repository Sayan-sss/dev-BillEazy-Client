import { Box, Typography } from "@mui/material";
import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import logo from "../Assets/newlogo.png";

const Contact = () => {
  return (
    <Box
      sx={{
        // border: "1px solid red",
        height: "100vh",
        width: "100vw",
        background: "#D7E8EA",
        // background: "#191D2B",
        color: "#073259",
      }}
    >
      <Box
        sx={{
          // border: "1px solid red",
          height: "25%",
          width: "100%",
        }}
      >
        <Box
          sx={{
            // border: "1px solid red",
            height: "70%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={logo} alt="logo" height={"100%"} width={"35%"} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            // border: "1px solid red",
            height: "30%",
            width: "100%",
          }}
        >
          {" "}
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
      </Box>
      <Box
        sx={{
          border: "1px solid black",
          height: "75%",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            border: "1px solid red",
            height: "80%",
            width: "45%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ border: "1px solid blue", height: "60%", width: "100%" }}>
            our photo
          </Box>
          <Box sx={{ border: "1px solid blue", height: "35%", width: "100%" }}>
            bio
          </Box>
        </Box>
        <Box sx={{ border: "1px solid red", height: "80%", width: "45%" }}>
          contact
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
