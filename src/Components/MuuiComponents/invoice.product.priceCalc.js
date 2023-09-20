import { Box, Paper } from "@mui/material";
import React from "react";

const InvoiceproductpriceCalc = ({ totalProductPrice, totalTaxAmount }) => {
  return (
    <>
      <Box>
        <h4>TotalTax: {totalTaxAmount}</h4>
      </Box>
      <Box>
        {" "}
        <h4>TotalPrice : {totalProductPrice}</h4>{" "}
      </Box>
    </>
  );
};

export default InvoiceproductpriceCalc;
