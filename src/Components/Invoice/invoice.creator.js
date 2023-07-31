import { Box, Paper } from "@mui/material";
import React from "react";
import Supplierdetails from "../Invoice.fields/Supplier.details";
import InvoiceRadioGroup from "../MuuiComponents/InvoiceRadiogrp";
import InvoiceTextField from "../MuuiComponents/Invoice.textField";
// import TextField from "../MuuiComponents/TextField";
import "./invoiceCreator.css";
import BuyerDetails from "../Invoice.fields/Buyer.details";
import Productdetails from "../Invoice.fields/Product.details";
import TransportDetails from "../Invoice.fields/Transport.details";
const Invoicecreator = () => {
  return (
    <>
      <Box className="mainfrom">
        <Box className="invoicefrom_container">
          <Box
            className="up_container"
            sx={{ display: "flex", paddingTop: "2rem" }}
          >
            <Box className="up_left">
              <InvoiceTextField />
            </Box>

            <Box className="up_right" sx={{ width: "100%" }}>
              <Supplierdetails />
            </Box>
          </Box>

          <Box className="buyer_details">
            <BuyerDetails />
          </Box>
          <Box className="products_container">
            <Productdetails />
          </Box>
          <Box
            className="transport_container"
            sx={{
              border: "1px solid  #d9dbe9",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "15px",
              marginTop: "1.2rem",
            }}
          >
            <TransportDetails />
          </Box>
          <Box className="transportdetail_container">middletop</Box>
          <Box className="bankdetail_container">middletop</Box>
        </Box>
      </Box>
    </>
  );
};

export default Invoicecreator;
