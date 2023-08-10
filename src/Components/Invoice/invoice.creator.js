import { Box, Button, Paper } from "@mui/material";
import React from "react";
import Supplierdetails from "../Invoice.fields/Supplier.details";
import InvoiceRadioGroup from "../MuuiComponents/InvoiceRadiogrp";
import InvoiceTextField from "../MuuiComponents/Invoice.textField";
// import TextField from "../MuuiComponents/TextField";
import "./invoiceCreator.css";
import BuyerDetails from "../Invoice.fields/Buyer.details";
import Productdetails from "../Invoice.fields/Product.details";
import TransportDetails from "../Invoice.fields/Transport.details";
import Bankdetails from "../Invoice.fields/Bank.details";
import TermsAndCondition from "../MuuiComponents/TermsAndCondition";
const Invoicecreator = () => {
  return (
    <>
      <Box
        className="mainfrom"
        sx={{
          // border: "1px solid black",
          marginTop: "-2rem",
          display: "flex",
          justifyContent: "center",
          width: "100%",
          // backgroundColor: #d9dbe9,
          // backgroundColor: "white",
        }}
      >
        {/* <Button /> */}
        <Box
          className="invoicefrom_container"
          sx={{
            border: "1px solid black",
            width: "90%",
            // height: "100%",
            overflowY: "scroll",
            display: "flex",
            flexDirection: "column",
            marginTop: "5rem",
            marginBottom: "3rem",
            backgroundColor: "white",
            borderRadius: "15px",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
          }}
        >
          <Box
            className="up_container"
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: "2rem",
            }}
          >
            <Box className="up_left">
              <InvoiceTextField />
            </Box>

            <Box
              className="up_right"
              sx={{
                marginRight: "0.5rem",
                width: "55vw",
                borderRadius: "10px",
                border: "1px solid #d9dbe9",
              }}
            >
              <Supplierdetails />
            </Box>
          </Box>

          <Box className="buyer_details">
            <BuyerDetails />
          </Box>
          <Box className="products_container">
            <Productdetails />
          </Box>
          <Box className="transport_container">
            <TransportDetails />
          </Box>

          <Box className="bankdetail_container">
            <Bankdetails />
          </Box>
          <Box>
            <TermsAndCondition />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Invoicecreator;
