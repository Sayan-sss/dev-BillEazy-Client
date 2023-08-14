import { Box, Button, Paper, Typography } from "@mui/material";
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
import { useSelector } from "react-redux";
const Invoicecreator = () => {
  const { data } = useSelector((state) => state.supplierReducer)
  const {
    firmName,
    companyAddress,
    companyGstin,
    companyEmail,
    companyPan,
    companyMobile,
    dlNo,
    city,
    state,
    pincode
  } = data;
  console.log(data)
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
            alignItems: "center",
            marginTop: "3rem",
            marginBottom: "1rem",
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
              justifyContent: "space-around",
              paddingTop: "2rem",
              width: "100%"
            }}
          >
            <Box className="up_left">
              <InvoiceTextField />
            </Box>

            <Box
              className="up_right"
              sx={{
                marginRight: "0.5rem",
                width: "53vw",
                borderRadius: "10px",
                border: "1px solid #d9dbe9",
              }}
            >
              <Supplierdetails />
              <Box sx={{
                // border: "1px solid red",
                height: "fit-content",
                display: 'flex',
                ml: "1rem",
                my: "1rem",
                flexDirection: 'column',

              }}>
                {firmName && <Typography variant="h6">
                  {firmName}
                </Typography>}
                {companyEmail && <Typography variant="subtitle1">
                  Email: {companyEmail}
                </Typography>}
                {dlNo && <Typography variant="subtitle1">
                  DL No.: {dlNo}
                </Typography>}
                {companyPan && <Typography variant="subtitle1">
                  PAN: {companyPan}
                </Typography>}
                {companyAddress && <Typography variant="subtitle1">
                  Company Address: {companyAddress}
                </Typography>}
                {city && <Typography variant="subtitle1">
                  City: {city}
                </Typography>}
                {state && <Typography variant="subtitle1">
                  State: {state}
                </Typography>}
                {pincode && <Typography variant="subtitle1">
                  Pincode: {pincode}
                </Typography>}
                {companyGstin && <Typography variant="subtitle1">
                  GSTIN: {companyGstin}
                </Typography>}
                {companyMobile && <Typography variant="subtitle1">
                  Mobile: {companyMobile}
                </Typography>}

              </Box>
            </Box>
          </Box>

          <Box className="buyer_details" sx={{ width: "99%" }}>
            <BuyerDetails />
          </Box>
          <Box className="products_container" sx={{ width: "99%" }}>
            <Productdetails />
          </Box>
          <Box className="transport_container" sx={{ width: "99%" }}>
            <TransportDetails />
          </Box>

          <Box className="bankdetail_container" sx={{ width: "99%" }}>
            <Bankdetails />
          </Box>
          <Box sx={{ width: "99%" }}>
            <TermsAndCondition />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Invoicecreator;
