import { Button } from "@mui/base";
import React from "react";
import { useNavigate } from "react-router-dom";
import Invoicetable from "../MuuiComponents/invoiceTable";
import "./invoicegenerator.css";
// import invoiceTable from "../MuuiComponents/invoiceTable";
const Invoicegenerator = () => {
  const navigate = useNavigate();
  return (
    <div className="invoice_container">
      <div className="table_container">
        <Invoicetable />
        <Button
          onClick={() => {
            navigate("/invoice/create");
          }}
        >
          Create
        </Button>
      </div>
    </div>
  );
};

export default Invoicegenerator;
