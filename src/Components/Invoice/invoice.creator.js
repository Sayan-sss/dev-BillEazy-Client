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
  const User = useSelector((state) => state.authReducer);
  const { token, user } = User;

  const { data } = useSelector((state) => state.SupplierReducer);
  const buyerData = useSelector((state) => state.BuyerReducer);
  const productData = useSelector((state) => state.ProductReducer);
  const transportData = useSelector((state) => state.TransportReducer);
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
    pincode,
  } = data;
  console.log(data);
  // console.log("buyerData");
  // console.log(buyerData);
  console.log("productData");
  console.log(productData);
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
              <Box
                sx={{
                  // border: "1px solid red",
                  height: "fit-content",
                  display: "flex",
                  ml: "1rem",
                  my: "1rem",
                  flexDirection: "column",
                }}
              >
                {firmName && <Typography variant="h6">{firmName}</Typography>}
                {companyEmail && (
                  <Typography variant="subtitle1">
                    Email: {companyEmail}
                  </Typography>
                )}
                {dlNo && (
                  <Typography variant="subtitle1">DL No.: {dlNo}</Typography>
                )}
                {companyPan && (
                  <Typography variant="subtitle1">PAN: {companyPan}</Typography>
                )}
                {companyAddress && (
                  <Typography variant="subtitle1">
                    Company Address: {companyAddress}
                  </Typography>
                )}
                {city && (
                  <Typography variant="subtitle1">City: {city}</Typography>
                )}
                {state && (
                  <Typography variant="subtitle1">State: {state}</Typography>
                )}
                {pincode && (
                  <Typography variant="subtitle1">
                    Pincode: {pincode}
                  </Typography>
                )}
                {companyGstin && (
                  <Typography variant="subtitle1">
                    GSTIN: {companyGstin}
                  </Typography>
                )}
                {companyMobile && (
                  <Typography variant="subtitle1">
                    Mobile: {companyMobile}
                  </Typography>
                )}
              </Box>
            </Box>
          </Box>

          <Box className="buyer_details" sx={{ width: "99%" }}>
            <BuyerDetails />
            <Box
              sx={{
                // border: "1px solid red",
                height: "fit-content",
                display: "flex",
                ml: "1rem",
                my: "1rem",
                flexDirection: "column",
              }}
            >
              {buyerData?.data?.companyName && (
                <Typography variant="h6">
                  {buyerData.data?.companyName}
                </Typography>
              )}
              {buyerData?.data?.companyEmail && (
                <Typography variant="subtitle1">
                  Email: {buyerData?.data?.companyEmail}
                </Typography>
              )}
              {buyerData?.data?.dlNo && (
                <Typography variant="subtitle1">
                  DL No.: {buyerData?.data?.dlNo}
                </Typography>
              )}
              {buyerData?.data?.gstTreatmentType && (
                <Typography variant="subtitle1">
                  PAN: {buyerData?.data?.gstTreatmentType}
                </Typography>
              )}
              {buyerData?.data?.companyAddress && (
                <Typography variant="subtitle1">
                  Company Address: {buyerData?.data?.companyAddress}
                </Typography>
              )}
              {buyerData?.data?.city && (
                <Typography variant="subtitle1">
                  City: {buyerData?.data?.city}
                </Typography>
              )}
              {buyerData?.data?.state && (
                <Typography variant="subtitle1">
                  State: {buyerData?.data?.state}
                </Typography>
              )}
              {buyerData?.data?.pincode && (
                <Typography variant="subtitle1">
                  Pincode: {buyerData?.data?.pincode}
                </Typography>
              )}
              {buyerData?.data?.companyGstin && (
                <Typography variant="subtitle1">
                  GSTIN: {buyerData?.data?.companyGstin}
                </Typography>
              )}
              {buyerData?.data?.companyMobile && (
                <Typography variant="subtitle1">
                  Mobile: {buyerData?.data?.companyMobile}
                </Typography>
              )}
            </Box>
          </Box>
          <Box className="products_container" sx={{ width: "99%" }}>
            <Productdetails />
            <Box
              sx={{
                // border: "1px solid red",
                height: "fit-content",
                display: "flex",
                ml: "1rem",
                my: "1rem",
                flexDirection: "column",
              }}
            >
              {productData?.data?.itemName && (
                <Typography variant="h6">
                  {productData?.data?.itemName}
                </Typography>
              )}
              {productData?.data?.itemDescription && (
                <Typography variant="subtitle1">
                  Description: {productData?.data?.itemDescription}
                </Typography>
              )}
              {productData?.data?.hsn && (
                <Typography variant="subtitle1">
                  HSN.: {productData?.data?.hsn}
                </Typography>
              )}
              {productData?.data?.quantity && (
                <Typography variant="subtitle1">
                  Quantity: {productData?.data?.quantity}
                </Typography>
              )}
              {productData?.data?.unit && (
                <Typography variant="subtitle1">
                  Unit: {productData?.data?.unit}
                </Typography>
              )}
              {productData?.data?.salePrice && (
                <Typography variant="subtitle1">
                  salePrice: {productData?.data?.salePrice}
                </Typography>
              )}
              {productData?.data?.discount && (
                <Typography variant="subtitle1">
                  Discount: {productData?.data?.discount}
                </Typography>
              )}
              {productData?.data?.discountType && (
                <Typography variant="subtitle1">
                  DiscountType: {productData?.data?.discountType}
                </Typography>
              )}
              {productData?.data?.taxType && (
                <Typography variant="subtitle1">
                  TaxType: {productData?.data?.taxType}
                </Typography>
              )}
              {productData?.data?.gst && (
                <Typography variant="subtitle1">
                  Gst: {productData?.data?.gst}
                </Typography>
              )}
            </Box>
          </Box>
          <Box className="transport_container" sx={{ width: "99%" }}>
            <TransportDetails />
            <Box
              sx={{
                // border: "1px solid red",
                height: "fit-content",
                display: "flex",
                ml: "1rem",
                my: "1rem",
                flexDirection: "column",
              }}
            >
              {transportData?.data?.type && (
                <Typography variant="h6">
                  {transportData?.data?.type}
                </Typography>
              )}
              {transportData?.data?.lrDate && (
                <Typography variant="subtitle1">
                  Lr Date: {transportData?.data?.lrDate}
                </Typography>
              )}
              {transportData?.data?.lrNumber && (
                <Typography variant="subtitle1">
                  Lr Number.: {transportData?.data?.lrNumber}
                </Typography>
              )}
              {transportData?.data?.dateOfSupply && (
                <Typography variant="subtitle1">
                  Date Of Supply: {transportData?.data?.dateOfSupply}
                </Typography>
              )}
              {transportData?.data?.placeOfSupply && (
                <Typography variant="subtitle1">
                  placeOfSupply: {transportData?.data?.placeOfSupply}
                </Typography>
              )}
              {transportData?.data?.vehicleNumber && (
                <Typography variant="subtitle1">
                  vehicleNumber: {transportData?.data?.vehicleNumber}
                </Typography>
              )}
              {transportData?.data?.supplyType && (
                <Typography variant="subtitle1">
                  supplyType: {transportData?.data?.supplyType}
                </Typography>
              )}
            </Box>
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
