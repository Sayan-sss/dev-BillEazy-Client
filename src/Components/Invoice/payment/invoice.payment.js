import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useInvoiceApis from "../../hooks/invoice.hooks";
import Invoice_Payment_Table from "./invoice.payment.table";

const Invoice_Payment = () => {
  const { data } = useSelector((state) => state.Invoice_Product_Reducer);
  const [paidAmount, setPaidAmount] = useState(0);
  const pendingAmount =
    data?.Invoice_Product?.product?.final_price - paidAmount;
  console.log(pendingAmount);
  console.log(paidAmount);
  console.log(data);

  const { getInvoice_Product_Details, updateProductDetails } = useInvoiceApis();

  let { id } = useParams();

  console.log(id);

  useEffect(() => {
    getInvoice_Product_Details(id);
  }, []);
  const Product_Id = data?.Invoice_Product?.product?._id;
  const handleSubmit = async () => {
    try {
      updateProductDetails({ Product_Id, paidAmount, pendingAmount });
      getInvoice_Product_Details(id);
    } catch (error) {
      toast.error("while submitting");
    }
  };

  return (
    <>
      <Box
        sx={{
          // border: "1px solid red",
          height: "98%",
          width: "98%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Invoice_Payment_Table
          data={data}
          paidAmount={paidAmount}
          setPaidAmount={setPaidAmount}
        />
        <Box
          sx={{
            mt: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            width: "100%",
          }}
        >
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              mr: "1rem",
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Invoice_Payment;
