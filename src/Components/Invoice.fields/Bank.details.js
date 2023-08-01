import { Box, Typography } from "@mui/material";
import React from "react";
import InvoiceDialouge from "../MuuiComponents/InvoiceBankdetails.dialouge";

const Bankdetails = () => {
  return (
    <>
      <Box
        className="header"
        sx={{
          width: "98%",
          //   border: "1px solid black",
          backgroundColor: "#d9dbe9",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "3.5rem",
          marginTop: "1.2rem",
          //   marginLeft: ".7rem",
          //   marginRight: ".7rem",
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: "3px",
        }}
      >
        <Typography variant="h5" gutterBottom sx={{ fontWeight: "" }}>
          Bank Details (OPTIONAL FIELD)
        </Typography>
        <InvoiceDialouge />
      </Box>
    </>
  );
};

export default Bankdetails;