import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import BuyerCardViewer from "../viewCart/buyer.details.view.cart";
import { toast } from "react-hot-toast";
import API from "../../../api";
import { useSelector } from "react-redux";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import useInvoiceApis from "../../hooks/invoice.hooks";
export default function ShowAllBuyer(props) {
  const { open, setOpen } = props;
  const { getBuyerDetails, buyerData } = useInvoiceApis();
  const User = useSelector((state) => state.authReducer);
  const { user } = User;
  const totalBuyers = buyerData?.length;
  // console.log(user._id);
  // console.log(buyerData);
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
      <MoreVertIcon
        onClick={() => {
          getBuyerDetails(user._id);
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
          {`${totalBuyers} - previous buyers`}
        </DialogTitle>
        <DialogContent>
          {buyerData?.map((buyer) => (
            <BuyerCardViewer
              key={buyer._id}
              props={buyer}
              getBuyerDetails={getBuyerDetails}
            />
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}