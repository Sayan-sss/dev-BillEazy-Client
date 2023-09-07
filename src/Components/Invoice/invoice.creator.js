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
import ViewSupplierDetails from "./InvoiceAllFieldsView/view.supplier.details";
import ViewBuyerDetails from "./InvoiceAllFieldsView/view.buyer.details";
import ViewProductsDetails from "./InvoiceAllFieldsView/view.products.details";
import ViewTransportDetails from "./InvoiceAllFieldsView/view.transport.details";
import ViewBankDetails from "./InvoiceAllFieldsView/view.bank.details";
import useInvoiceApis from "../hooks/invoice.hooks";
import { useNavigate } from "react-router-dom";

const Invoicecreator = () => {
  const { addInvoiceDetails } = useInvoiceApis();
  const navigate = useNavigate();
  // const User = useSelector((state) => state.authReducer);
  // const { token, user } = User;

  // const productData = useSelector((state) => state.ProductReducer);
  // const transportData = useSelector((state) => state.TransportReducer);

  // console.log("productData");
  // console.log(productData);
  const handleCreateInvoice = async () => {
    addInvoiceDetails();
    navigate("/invoiceList");
  };
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
            border: "2px solid #073259",
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
          {/* <Button
            variant="contained"
            sx={{ marginLeft: "auto", marginRight: "5px", marginTop: "5px" }}
            onClick={handleCreateInvoice}
          >
            Create
          </Button> */}
          <Box
            className="up_container"
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              paddingTop: "2rem",
              width: "100%",
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
              <ViewSupplierDetails />
            </Box>
          </Box>

          <Box className="buyer_details" sx={{ width: "99%" }}>
            <BuyerDetails />
            <ViewBuyerDetails />
          </Box>
          <Box className="products_container" sx={{ width: "99%" }}>
            <Productdetails />

            <ViewProductsDetails />
          </Box>
          <Box className="transport_container" sx={{ width: "99%" }}>
            <TransportDetails />

            <ViewTransportDetails />
          </Box>

          <Box className="bankdetail_container" sx={{ width: "99%" }}>
            <Bankdetails />
            <ViewBankDetails />
          </Box>
          <Box sx={{ width: "99%" }}>
            <TermsAndCondition />
          </Box>
          <Button
            variant="contained"
            sx={{
              background: "#073259",
              marginLeft: "auto",
              marginRight: "1.5rem",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
            onClick={handleCreateInvoice}
          >
            Create
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Invoicecreator;
