import { Box } from "@mui/material";
import React from "react";
import InvoiceRadioGroup from "../MuuiComponents/InvoiceRadiogrp";
import InvoiceTextField from "../MuuiComponents/TextField";
// import TextField from "../MuuiComponents/TextField";
import "./invoiceCreator.css";
const Invoicecreator = () => {
  return (
    <>
      <Box className="mainfrom">
        <Box className="invoicefrom_container">
          <Box className="up_left">
            <InvoiceTextField />
          </Box>

          <Box className="up_right">upright</Box>
          <Box className="buyer_details">middletop</Box>
          <Box className="products_container">middletop</Box>
          <Box className="transportdetail_container">middletop</Box>
          <Box className="bankdetail_container">middletop</Box>
        </Box>
      </Box>
    </>
  );
};

export default Invoicecreator;
