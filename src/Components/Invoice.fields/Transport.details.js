import { Box, Typography } from "@mui/material";
import React from "react";

import InvoiceTransport from "../MuuiComponents/InvoiceTransport.dialouge";

const TransportDetails = () => {
  return (
    <>
      <Box
        className="header"
        sx={{
          width: "100%",
          border: "1px solid #d9dbe9",
          backgroundColor: "#d9dbe9",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "1.2rem",
          height: "3.5rem",
          //   border: "1px solid black",
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{ display: "flex", justifyContent: "center", marginBottom: "0" }}
        >
          Transport Details
        </Typography>
        <InvoiceTransport />
      </Box>
    </>
  );
};

export default TransportDetails;
