import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import ShowAllSupplier from "../MuuiComponents/fetchInvoiceSubfield/invoice.Supplier.details.showAllSupplier";
import InvoiceDialouge from "../MuuiComponents/InvoiceSupplier.dialouge";

const Supplierdetails = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Box
        className="header"
        sx={{
          width: "96%",
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
        <Typography variant="h5" gutterBottom>
          SUPPLIER DETAILS
        </Typography>
        <ShowAllSupplier open={open} setOpen={setOpen} />
        <InvoiceDialouge />
      </Box>
    </>
  );
};

export default Supplierdetails;
