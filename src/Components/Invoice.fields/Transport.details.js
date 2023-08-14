import { Box, Typography } from "@mui/material";
import React from "react";

import InvoiceTransport from "../MuuiComponents/InvoiceTransport.dialouge";

const TransportDetails = () => {
  return (
    <>
      <Box
        className="header"
        sx={{
          width: "97%",
          //   border: "1px solid black",
          backgroundColor: "#d9dbe9",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "3.5rem",
          marginTop: "1.2rem",
          paddingLeft: ".7rem",
          //   marginLeft: ".7rem",
          //   marginRight: ".7rem",
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: "10px",
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{ display: "flex", justifyContent: "center", marginBottom: "0" }}
        >
          TRANSPORT DETAILS
        </Typography>
        <InvoiceTransport />
      </Box>
    </>
  );
};

export default TransportDetails;
