import { Box } from "@mui/material";
import React from "react";
import DataChart from "./DataChart";
import Details from "./Details";

const Account = () => {
  return (
    <Box
      sx={{
        // border: "1px solid red",
        height: "100vh",
        width: "90vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          //   border: "1px solid blue",
          height: "95vh",
          width: "80vw",
          display: "flex",
          flexDirection: "column",
          //   alignItems: "center",
          //   justifyContent: "center",
        }}
      >
        <Box
          sx={{
            // border: "1px solid #073259",
            height: "60vh",
            width: "80vw",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              //   border: "1px solid black",
              height: "60vh",
              width: "30vw",
              display: "flex",
              // flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            account
          </Box>
          <Box
            sx={{
              //   border: "1px solid black",
              height: "60vh",
              width: "50vw",
              display: "flex",
              // flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Details />
          </Box>
        </Box>
        <Box
          sx={{
            border: "2px solid #073259",
            height: "35vh",
            width: "80vw",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <DataChart />
        </Box>
      </Box>
    </Box>
  );
};

export default Account;
