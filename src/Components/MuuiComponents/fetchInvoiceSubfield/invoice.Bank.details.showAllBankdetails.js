import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import BuyerCardViewer from "../viewCart/buyer.details.view.cart";

import API from "../../../api";
import { useSelector } from "react-redux";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import useInvoiceApis from "../../hooks/invoice.hooks";

export default function ShowAllBankDetails(props) {
  const { open, setOpen } = props;
  const { getBankDetails, bankData } = useInvoiceApis();
  const User = useSelector((state) => state.authReducer);
  const { user } = User;
  const totalBanks = bankData?.length;
  // console.log(user._id);
  // console.log(buyerData);
  const handleClickOpen = () => {
    setOpen(true);
    console.log(open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const getBuyerData = React.useCallback(async () => {
  //   handleClickOpen();
  //   try {
  //     const { data } = await API.post(
  //       `/v1/api/invoice/buyerdetails/get/${user._id}`
  //     );
  //     if (data?.success) {
  //       // console.log(data.Allbuyer);
  //       setBuyerData(data.Allbuyer);
  //       console.log(buyerData);
  //       toast.success("Success");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.error(error);
  //   }
  // }, [buyerData]);

  return (
    <div>
      {/* <Button variant="outlined"> */}
      <MoreVertIcon
        onClick={() => {
          getBankDetails(user._id);
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
          {`${totalBanks} - previous buyers`}
        </DialogTitle>
        <DialogContent>
          {bankData?.map((bank) => (
            <BuyerCardViewer
              key={bank._id}
              props={bank}
              //   getBuyerDetails={getBuyerDetails}
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
