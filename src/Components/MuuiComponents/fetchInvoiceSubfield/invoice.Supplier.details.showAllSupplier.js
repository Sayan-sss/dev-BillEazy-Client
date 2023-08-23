import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";

import { useSelector } from "react-redux";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import useInvoiceApis from "../../hooks/invoice.hooks";
import ProductCardViewer from ".././viewCart/products.details.view.cart";
import SupplierCardViewer from "../viewCart/supplier.details.view.cart";
import ListIcon from "@mui/icons-material/List";
export default function ShowAllSupplier(props) {
  const { open, setOpen } = props;
  const { getSupplierDetails, supplierData } = useInvoiceApis();
  const User = useSelector((state) => state.authReducer);
  const { user } = User;
  const totalSuppliers = supplierData?.length;

  // console.log(productData);
  const handleClickOpen = () => {
    setOpen(true);
    console.log(open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined"> */}
      <ListIcon
        sx={{ cursor: "pointer" }}
        onClick={async () => {
          await getSupplierDetails(user._id);
          handleClickOpen();
        }}
      />
      {/* </Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ height: "700px" }}
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{
            backgroundColor: "#062541",
            color: "white",
            fontFamily: "Roboto",
            fontSize: "bold",
          }}
        >
          {`${totalSuppliers} - previous suppliers`}
        </DialogTitle>
        <DialogContent>
          {supplierData?.map((supplier) => (
            <SupplierCardViewer
              key={supplier._id}
              supplier={supplier}

              //   getBuyerDetails={getBuyerDetails}
            />
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Save</Button>
          {/* <Button onClick={handleClose}>Agree</Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}
