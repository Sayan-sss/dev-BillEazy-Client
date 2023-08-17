import { Box, Button, Typography } from "@mui/material";
import React from "react";

const PricingBox = (props) => {
  return (
    <Box
      sx={{
        border: "2px solid #073259",
        height: "50vh",
        width: "20vw",
        borderRadius: "2px",
        boxShadow: 5,
      }}
    >
      <Box
        sx={{
          background: "#073259",
          color: "white",
          height: "10vh",
          width: "20vw",
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            height: "10vh",
            width: "20vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {props.title}
        </Typography>
      </Box>
      <Box sx={{ height: "10vh", width: "20vw" }}>
        <Typography
          align="center"
          variant="h3"
          gutterBottom
          sx={{
            height: "10vh",
            width: "20vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // textAlign: "center",
          }}
        >
          {props.price}
        </Typography>
      </Box>
      <Box sx={{ height: "20vh", width: "20vw" }}>
        <Typography
          variant="subtitle1"
          align="center"
          gutterBottom
          sx={{
            // border: "1px solid red",
            height: "20vh",
            width: "20vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {props.about}
        </Typography>
        <Box
          sx={{
            // border: "1px solid red",
            height: "10vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{
              width: "15vw",
              background: "#073259",
            }}
          >
            {props.button}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PricingBox;