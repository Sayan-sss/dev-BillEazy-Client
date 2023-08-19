import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import BuyerCardViewer from ".././viewCart/buyer.details.view.cart";
import { toast } from "react-hot-toast";
import API from "../../../api";
import { useSelector } from "react-redux";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import useInvoiceApis from "../../hooks/invoice.hooks";
import ProductCardViewer from ".././viewCart/products.details.view.cart";
export default function ShowAllProducts(props) {
  const { open, setOpen } = props;
  const { getProductDetails, productData, setProductData } = useInvoiceApis();
  const User = useSelector((state) => state.authReducer);
  const { user } = User;
  const totalProducts = productData?.length;
  // console.log(user._id);
  console.log(productData);
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
          getProductDetails(user._id);
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
          {`${totalProducts} - previous products`}
        </DialogTitle>
        <DialogContent>
          {productData?.map((product) => (
            <ProductCardViewer
              key={product._id}
              product={product}

              //   getBuyerDetails={getBuyerDetails}
            />
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
