import { Box, Typography } from "@mui/material";
import React from "react";
import InvoiceDialouge from "../MuuiComponents/InvoiceSupplier.dialouge";

const Supplierdetails = () => {
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
          height: "3.5rem",
        }}
      >
        <Typography variant="h5" gutterBottom>
          SUPPLIER DETAILS
        </Typography>
        <InvoiceDialouge />
      </Box>
    </>
  );
};

export default Supplierdetails;