import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InvoiceRadioGroup from "./InvoiceRadiogrp";

export default function InvoiceTextField() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
        border: "1px solid #d9dbe9",
        height: "35vh",
        // width: "35vw",
        // maxWidth: "35vw",
        // height: "30vh",
        borderRadius: "15px",
        width: "25vw",
      }}
      noValidate
      autoComplete="off"
    >
      <InvoiceRadioGroup />
      <TextField
        id="outlined-basic"
        label="Invoice Prefix"
        variant="standard"
      />
      <TextField id="filled-basic" label="Invoice no" variant="standard" />
      <TextField
        id="standard-basic"
        // label="invoice date"
        variant="standard"
        type={"date"}
      />
    </Box>
  );
}
