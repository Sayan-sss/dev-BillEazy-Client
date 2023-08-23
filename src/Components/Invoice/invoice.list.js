import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Invoicetable from "../MuuiComponents/invoiceTable";
// import "./InvoiceList.css";
import SearchAppBar from "../MuuiComponents/Searchbar";
// import invoiceTable from "../MuuiComponents/invoiceTable";
const InvoiceList = () => {
  const navigate = useNavigate();
  return (
    <Box
      className="invoice_container"
      sx={{
        // border: "10px solid red",
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        className="table_container"
        sx={{
          border: "none",
          marginTop: "5rem",
          // height: "80vh",
          width: "90%",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button
            variant="contained"
            onClick={() => {
              navigate("/invoice/create");
            }}
            sx={{
              width: "5rem",
              marginLeft: "auto",
              display: "flex",
              height: "2rem",
              backgroundColor: "#073259",
              color: "white",
            }}
          >
            Create
          </Button>
          <SearchAppBar />
        </Box>
        <Invoicetable field="Invoice" />
      </Box>
    </Box>
  );
};

export default InvoiceList;
